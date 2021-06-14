var express = require('express')

var app = express()

var server = app.listen(3000,function(){
    console.log('3000 portu dinleniyor')
})

app.use(express.static('public'))