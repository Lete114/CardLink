import styles from './main.css'

const style = createElement('style')
style.textContent = styles
document.head.appendChild(style)

/**
 * Determine if it is a ['https://', 'http://', '//'] protocol
 * @param {String} url Website url
 * @returns {Boolean}
 */
function isHttp(url) {
  return /^(https?:)?\/\//g.test(url)
}

/**
 * Creating element
 * @param {String} name Element Name
 * @param {String} className Element className
 * @returns {HTMLElement}
 */
function createElement(name, className) {
  const dom = document.createElement(name)
  if (className) dom.className = className
  return dom
}

/**
 * Creates svg element
 * @param {String} name Element Name
 * @returns {SVGElementTagNameMap}
 */
function createSVG(name) {
  return document.createElementNS('http://www.w3.org/2000/svg', name)
}

/**
 * Set element attribute
 * @param {HTMLElement} el Element
 * @param {Object} obj Objects of key-value pairs
 */
function setAttribute(el, obj) {
  for (const key in obj) el.setAttribute(key, obj[key])
}

/**
 * Append child node or element
 * @param {HTMLElement} el Element
 * @param {Node} child The node to append to the given parent node (commonly an element).
 */
function appendChild(el, child) {
  el.appendChild(child)
}

/**
 * Create card link icon
 * @param {String} icon Icon URL
 * @returns {SVGElementTagNameMap}
 */
function createIcon(icon) {
  const svg = createSVG('svg')
  svg.classList.add('card-link-icon')
  svg.style.background = '#ebebeb'
  setAttribute(svg, { fill: '#d4d4d4', viewBox: '0 0 1024 1024' })
  const path = createSVG('path')

  setAttribute(path, {
    // eslint-disable-next-line max-len
    d: 'M177.152 384a357.546667 357.546667 0 0 0-23.552 128 357.546667 357.546667 0 0 0 23.552 128h140.245333a791.808 791.808 0 0 1-10.197333-128c0-44.714667 3.584-87.722667 10.197333-128H177.152z m24.405333-51.2h126.250667c15.786667-65.024 40.021333-120.405333 69.76-160.554667A359.466667 359.466667 0 0 0 201.557333 332.8zM844.8 378.709333V384h-138.197333c6.613333 40.277333 10.197333 83.285333 10.197333 128s-3.584 87.722667-10.197333 128H844.8v5.290667c16.512-41.216 25.6-86.186667 25.6-133.290667a357.418667 357.418667 0 0 0-25.6-133.290667zM822.442667 332.8a359.466667 359.466667 0 0 0-196.010667-160.554667c29.738667 40.149333 53.930667 95.573333 69.76 160.554667h126.293333zM369.365333 384a736.042667 736.042667 0 0 0-10.965333 128c0 45.354667 3.968 88.448 10.965333 128h285.269334c6.997333-39.552 10.965333-82.645333 10.965333-128s-3.968-88.448-10.965333-128H369.365333z m11.264-51.2h262.741334c-28.586667-108.032-80.725333-179.2-131.370667-179.2-50.645333 0-102.741333 71.168-131.370667 179.2z m-179.072 358.4a359.466667 359.466667 0 0 0 196.010667 160.554667c-29.738667-40.149333-53.930667-95.573333-69.76-160.554667h-126.293333z m620.885334 0h-126.250667c-15.786667 65.024-40.021333 120.405333-69.76 160.554667a359.466667 359.466667 0 0 0 196.010667-160.554667z m-441.813334 0c28.586667 108.032 80.725333 179.2 131.370667 179.2 50.645333 0 102.741333-71.168 131.370667-179.2H380.629333zM512 921.6a409.6 409.6 0 1 1 0-819.2 409.6 409.6 0 0 1 0 819.2z'
  })
  appendChild(svg, path)

  const img = createElement('img', 'card-link-icon')
  img.src = icon

  // If icon is valid, replace `svgIcon` with `imgIcon`
  img.onload = function () {
    img.onload = null
    svg.parentNode.replaceChild(img, svg)
  }
  return svg
}

/**
 * Creating a Document Object Model
 * @param {String} title Website title
 * @param {String} link Website address
 * @param {String} icon Website icon
 * @returns {HTMLElement}
 */
// eslint-disable-next-line max-statements
function createDOM(title, link, icon) {
  const wrapDOM = createElement('div', 'card-link')
  const iconDOM = createIcon(icon)

  const aDOM = createElement('a', 'card-link-content')
  aDOM.href = link

  const textDOM = createElement('div', 'card-link-text')

  const titleDOM = createElement('span', 'card-link-title')
  titleDOM.textContent = title

  const linkDOM = createElement('span', 'card-link-url')

  const linkSvgDOM = createSVG('svg')
  setAttribute(linkSvgDOM, {
    width: 14,
    height: 14,
    viewBox: '0 0 24 24',
    fill: 'currentColor'
  })

  const linkPathDOM = createSVG('path')
  setAttribute(linkPathDOM, {
    // eslint-disable-next-line max-len
    d: 'M5.327 18.883a3.005 3.005 0 010-4.25l2.608-2.607a.75.75 0 10-1.06-1.06l-2.608 2.607a4.505 4.505 0 006.37 6.37l2.608-2.607a.75.75 0 00-1.06-1.06l-2.608 2.607a3.005 3.005 0 01-4.25 0zm5.428-11.799a.75.75 0 001.06 1.06L14.48 5.48a3.005 3.005 0 014.25 4.25l-2.665 2.665a.75.75 0 001.061 1.06l2.665-2.664a4.505 4.505 0 00-6.371-6.372l-2.665 2.665zm5.323 2.117a.75.75 0 10-1.06-1.06l-7.072 7.07a.75.75 0 001.061 1.06l7.071-7.07z'
  })

  appendChild(linkSvgDOM, linkPathDOM)
  appendChild(linkDOM, linkSvgDOM)
  appendChild(linkDOM, document.createTextNode(link))

  appendChild(textDOM, titleDOM)
  appendChild(textDOM, linkDOM)
  appendChild(aDOM, textDOM)
  appendChild(aDOM, iconDOM)
  appendChild(wrapDOM, aDOM)
  return wrapDOM
}

/**
 * Get info
 * @param {Element} el Element
 * @param {String} html String type html
 * @param {String} link Website address
 */
// eslint-disable-next-line max-statements
function getInfo(el, html, link) {
  let title, icon
  const doc = new DOMParser().parseFromString(html, 'text/html')
  // If there is no title, no card link is generated
  title = doc.querySelector('title')
  if (title) {
    title = title.textContent

    // Get the src of the first img tag in the body tag
    icon = doc.querySelector('body img')
    icon = icon && icon.getAttribute('src')
    // If there is no src then get the site icon
    if (!icon) {
      const links = [].slice.call(doc.querySelectorAll('link[rel][href]'))
      icon = links.find((el) => el.rel.includes('icon'))
      icon = icon.href
    }

    // If `icon` is not the ['https://', 'http://', '//'] protocol, splice on the `origin` of the a tag
    if (!isHttp(icon)) icon = new URL(link).origin + icon

    const dom = createDOM(title, link, icon)

    // Reset the attribute
    Array.from(el.attributes).forEach((attr) => {
      dom.querySelector('a').setAttribute(attr.name, attr.value)
    })
    el.parentNode.replaceChild(dom, el)
  }
}

function fetchPage(link, callback) {
  fetch(link)
    .then((result) => result.text())
    .then(callback)
    .catch((error) => {
      const server = cardLink.server
      // eslint-disable-next-line no-console
      if (link.includes(server) || !server) return console.error('CardLink Error:', error)
      fetchPage(server + link, callback)
    })
}

/**
 * Create card links
 * @param {NodeList} nodes A collection of nodes or a collection of arrays, if it is an array then the array must always contain node element
 */
export default function cardLink(nodes) {
  // If the `nodes` do not contain a `forEach` method, then the default `a[cardlink]` is used
  nodes = 'forEach' in (nodes || {}) ? nodes : document.querySelectorAll('a[cardlink]')
  nodes.forEach((el) => {
    // If it is not a tag element then it is not processed
    if (el.nodeType !== 1) return
    el.removeAttribute('cardlink')
    const link = el.href
    if (isHttp(link)) {
      fetchPage(link, (html) => {
        getInfo(el, html, link)
      })
    }
  })
}
