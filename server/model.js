const mongoose = require('mongoose')
//连接mongo，并且使用react这个集合，connect连接数据库
const DB_URL = 'mongodb://localhost:27017/react-chat-app'
mongoose.connect(DB_URL)

const models = {
    user:{
        'user':{type:String, require:true},
        'pwd':{type:String, require:true},
        'type':{type:String, require:true},
        //头像
        'avatar':{type:String},
        //个人简介或者职位描述
        'dec':{type:String},
        //职位名
        'title':{type:String},
        //boss两个字段
        'company':{type:String},
        'money':{type:String}
    },
    chat:{

    }
}

//类似于mysql的表 mongo里有文档、字段的概念
//建表 定义文档模型，Schema和model新建模型
for(let m in models){
    mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
    getModel:function(name){
        return mongoose.model(name)
    }
}