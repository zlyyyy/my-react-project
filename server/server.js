const express = require('express')

const app = express()

app.get('/',function(req,res){
    res.send('<h1>Hello world !!</h1>')
})
app.get('/data',function(req,res){
    res.json({
        name: 'xiaoming',
        type: '7.18'
    })
})
app.listen(9999,function(){
    console.log('node app start at port 9999')
})