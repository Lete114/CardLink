import './inject'
import renderer from './renderer'
import parse from './parse'
import { verifyParams, indexHandler, isHttp } from './utils'

const proxyHandler = {
  set(target, name, value) {
    verifyParams(value, ['title', 'link'])
    name = indexHandler(name)
    target[name] = value
    return true
  }
}
cardLink.cache = new Proxy({}, proxyHandler)

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
 * @param {NodeList} nodes A collection of nodes or a collection of arrays,
 * if it is an array then the array must always contain node element
 */
export default function cardLink(nodes) {
  // If the `nodes` do not contain a `forEach` method, then the default `a[cardlink]` is used
  nodes = 'forEach' in (nodes || {}) ? nodes : document.querySelectorAll('a[cardlink]')
  nodes.forEach((el) => {
    // If it is not a tag element then it is not processed
    if (el.nodeType !== 1) return
    el.removeAttribute('cardlink')
    const href = el.href

    const cache = cardLink.cache[href]
    if (cache) return renderer(el, cache.title, cache.link, cache.icon)

    if (isHttp(href)) {
      fetchPage(href, (html) => {
        const { title, link, icon } = parse(html, href)
        cardLink.cache[link] = { title, link, icon }
        renderer(el, title, link, icon)
      })
    }
  })
}
