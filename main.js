const bodyData = require('body-data')
const fetch = require('node-fetch')

module.exports = async (req, res) => {
  const { url } = await bodyData(req)
  if (!url) {
    res.statusCode = 404
    res.end(JSON.stringify({ message: 'Not Found' }))
    return
  }
  if (!/^https?:\/\//.test(url)) {
    res.statusCode = 400
    res.end(JSON.stringify({ message: 'Bad Request' }))
    return
  }
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*')
  res.setHeader('Cache-Control', 'public, s-maxage=1800, max-age=1800')
  res.setHeader('Content-Type', 'text/html;charset=utf8')
  const response = await fetch(url)
  const text = await response.text()
  res.end(text)
}
