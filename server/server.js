const express = require('express')
const bodyParser = require('body-parser')
const cookieParser =require('cookie-parser')
const app = express()
const server = require('http').Server(app)

//全局
const io = require('socket.io')(server)

io.on('connection',function(socket){
    console.log('user login')
    //监听
    socket.on('sendmsg',function(data){
        //全局播报
        io.emit('recvmsg',data)
    })
})

const userRouter = require('./user')
//post解析
app.use(cookieParser())
app.use(bodyParser.json())

app.use('/user',userRouter)
//监听路由
// app.get('/',function(req,res){
//     res.send('<h1>Hello world !!</h1>')
// })
server.listen(9999,function(){
    console.log('node app start at port 9999')
})