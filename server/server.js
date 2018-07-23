const express = require('express')
const userRouter = require('./user')

const app = express()
app.use('/user',userRouter)
//监听路由
// app.get('/',function(req,res){
//     res.send('<h1>Hello world !!</h1>')
// })
app.listen(9999,function(){
    console.log('node app start at port 9999')
})