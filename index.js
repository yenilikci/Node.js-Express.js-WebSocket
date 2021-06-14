var express = require('express')
var socket = require('socket.io')

var app = express()

var server = app.listen(3000,function(){
    console.log('3000 portu dinleniyor')
})

var io = socket(server)
io.on('connection',(socket) => {
    console.log('socket bağlantısı oluşturuldu',socket.id);
})

app.use(express.static('public'))