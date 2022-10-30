import { isHttp } from './utils'

/**
 * Get info
 * @param {String} html String type html
 * @param {String} link Website address
 */
// eslint-disable-next-line max-statements
export default function (html, link) {
  try {
    let title, icon
    const doc = new DOMParser().parseFromString(html, 'text/html')
    // If there is no title, no card link is generated
    title = doc.querySelector('title')
    if (title) {
      title = title.textContent

      // Get the src of the first img tag in the body tag
      icon = doc.querySelector('body img')
      icon = icon && icon.getAttribute('src')

      if (/^data:image/.test(icon)) icon = ''

      // If there is no src then get the site icon
      if (!icon) {
        const links = [].slice.call(doc.querySelectorAll('link[rel][href]'))
        icon = links.find((_el) => _el.rel.includes('icon'))
        icon = icon && icon.getAttribute('href')
      }

      // If `icon` is not the ['https://', 'http://', '//'] protocol, splice on the `origin` of the a tag
      if (icon && !isHttp(icon)) icon = new URL(link).origin + icon

      return { title, link, icon }
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn('CardLink Error: Failed to parse', error)
  }
  return {}
}
