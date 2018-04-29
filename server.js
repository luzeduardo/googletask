const compression = require('compression')
const path = require('path')
const express = require('express')
const app = express()
var staticPath = path.join(__dirname, '/dist')
app.use(compression())
app.use(express.static(staticPath))
app.get('*', function (request, response) {
  response.sendFile(path.join(__dirname, '/dist/index.html'))
})

app.listen(8000, function () {
  console.log('Listen to them. Children of the night. What music they make')
})
