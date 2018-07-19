const express = require('express')
const mongoose = require('mongoose')
//连接mongo，并且使用react这个集合，connect连接数据库
const DB_URL = 'mongodb://localhost:27017/react'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
    console.log('mongo connect success')
})
//类似于mysql的表 mongo里有文档、字段的概念
//建表 定义文档模型，Schema和model新建模型
const User = mongoose.model('user',new mongoose.Schema({
    //字段 type：类型  require 必须的意思
    user:{type:String,require:true},
    age:{type:Number,require:true}
}))
//create，remove，update分别用来增、删、改的操作
//Find和findOne用来查询数据
//新增数据
// User.create({
//     user: 'xiaozhang',
//     age:10
// },function(err,doc){
//     if(!err){
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// })
//删除数据 异步执行判断
// User.remove({age:10},function(err,doc){
//    if(!err){
//        console.log('delete success')
//        User.find({},function(err,doc){
//            console.log(doc)
//        })
//    }
// })
//更新数据
// User.update({'user':'xiaoming'},{'$set':{age:26}},function(err,doc){
//     console.log(doc)
// })

const app = express()
//监听路由
app.get('/',function(req,res){
    res.send('<h1>Hello world !!</h1>')
})
app.get('/data',function(req,res){
    User.findOne({user:'xiaoming'},function(err,doc){
        res.json(doc)
    })
    // res.json({
    //     name: 'xiaoming',
    //     type: 'IT'
    // })
})
app.listen(9999,function(){
    console.log('node app start at port 9999')
})