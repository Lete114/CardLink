const http = require('http')
const main = require('./main')

const PORT = parseInt(process.env.PORT) || 6870

http.createServer(main).listen(PORT, function () {
  console.log('Server listening on port', PORT)
})
