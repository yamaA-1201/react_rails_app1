var express = require('express')
var path = require('path')
var app = express()

app.set('ip', 'localhost')
app.set('port', 3001)

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res, next) => {
  res.set({ 'Access-Control-Allow-Origin': '*' }); // ここでヘッダーにアクセス許可の情報を追加
});
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.listen(app.get('port'), app.get('ip'), function () {
  console.log('localhost:3001')
})
