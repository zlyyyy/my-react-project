const express = require('express')
const bodyParser = require('body-parser')
const cookieParser =require('cookie-parser')

const userRouter = require('./user')

const app = express()
//post解析
app.use(cookieParser())
app.use(bodyParser.json())

app.use('/user',userRouter)
//监听路由
// app.get('/',function(req,res){
//     res.send('<h1>Hello world !!</h1>')
// })
app.listen(9999,function(){
    console.log('node app start at port 9999')
})