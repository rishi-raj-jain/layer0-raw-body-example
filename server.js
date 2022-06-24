var express = require('express')

var app = express()

var PORT = process.env.PORT || 3000

app.use(function (req, res, next) {
  var data = []
  req.on('data', function (chunk) {
    data.push(chunk)
  })
  req.on('end', function () {
    req.body = Buffer.concat(data)
    next()
  })
})

app.post('/', function (req, res) {
  console.log(req.body)
  res.end()
})

app.listen(PORT, function (err) {
  if (err) console.log(err)
  console.log('Server listening on PORT', PORT)
})
