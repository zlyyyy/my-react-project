const mongoose = require('mongoose')
//连接mongo，并且使用react这个集合，connect连接数据库
const DB_URL = 'mongodb://localhost:27017/react'
mongoose.connect(DB_URL)