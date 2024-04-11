import { isHttp } from './utils'

/**
 * Get info
 * @param {String} html String type html
 * @param {String} link Website address
 * @returns {{ title: string; link: string; icon: string }} Website info
 */
// eslint-disable-next-line max-statements
export default function (html, link) {
  const result = { title: '', link, icon: '' }
  try {
    const doc = new DOMParser().parseFromString(html, 'text/html')
    // If there is no title, no card link is generated
    result.title = doc.querySelector('title')
    if (result.title) {
      result.title = result.title.textContent

      // Get the src of the first img tag in the body tag
      result.icon = doc.querySelector('body img')
      result.icon = result.icon && result.icon.getAttribute('src')

      if (/^data:image/.test(result.icon)) result.icon = ''

      // If there is no src then get the site icon
      if (!result.icon) {
        const links = [].slice.call(doc.querySelectorAll('link[rel][href]'))
        result.icon = links.find((_el) => _el.rel.includes('icon'))
        result.icon = result.icon && result.icon.getAttribute('href')
      }

      // If `icon` is not the ['https://', 'http://', '//'] protocol, splice on the `origin` of the a tag
      if (result.icon && !isHttp(result.icon)) result.icon = new URL(link).origin + result.icon
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn('CardLink Error: Failed to parse', error)
  }
  return result
}
