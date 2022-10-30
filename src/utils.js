/**
 * Creating element
 * @param {String} name Element Name
 * @param {String} className Element className
 * @returns {HTMLElement}
 */
export function createElement(name, className) {
  const dom = document.createElement(name)
  if (className) dom.className = className
  return dom
}

/**
 * Creates svg element
 * @param {String} name Element Name
 * @returns {SVGElementTagNameMap}
 */
export function createSVG(name) {
  return document.createElementNS('http://www.w3.org/2000/svg', name)
}

/**
 * Set element attribute
 * @param {HTMLElement} el Element
 * @param {Object} obj Objects of key-value pairs
 */
export function setAttribute(el, obj) {
  for (const key in obj) el.setAttribute(key, obj[key])
}

/**
 * Append child node or element
 * @param {HTMLElement} el Element
 * @param {Node} child The node to append to the given parent node (commonly an element).
 */
export function appendChild(el, child) {
  el.appendChild(child)
}

/**
 * Remove '/' and '/index.html'
 * @param {String} params
 * @returns { String }
 */
export function indexHandler(params) {
  let path = params.replace(/(\/index\.html|\/)*$/gi, '')
  if (path.length === 0) path += '/'
  return path
}

/**
 * @param {Object} param
 * @param {Array} requiredParams
 */
export function verifyParams(param, requiredParams) {
  for (const index in requiredParams) {
    const requiredParam = requiredParams[index]
    if (!param[requiredParam]) {
      throw new Error(`Parameter '${requiredParam}' not legal`)
    }
  }
}

/**
 * Determine if it is a ['https://', 'http://', '//'] protocol
 * @param {String} url Website url
 * @returns {Boolean}
 */
export function isHttp(url) {
  return /^(https?:)?\/\//g.test(url)
}
