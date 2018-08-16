const express = require('express')
const Router = express.Router()
const utility = require('utility')
const model = require('./model')
//获取用户信息
const User = model.getModel('user')
const Chat = model.getModel('chat')
const _filter = {'pwd':0,'__v':0}
// Chat.remove({},function(e,q){

// })
Router.get('/list',function(req,res){
    //request response
    //清除所有数据
    const { type } = req.query
    console.log(req.query)
    // User.remove({type:'boss'},function(e,d){})
    User.find({type},function(err,doc){
        return res.json({code:0,data:doc})
    })
})
Router.get('/getmsglist',function(req,res){
    const user = req.cookies.userid
    User.find({},function(e,userdoc){
        //所用用户中查找
        let users = {}
        //返回所有筛选用户的名称以及头像信息
        userdoc.forEach(v=>{
            users[v._id] = {name: v.user, avatar: v.avatar}
        })
        Chat.find({'$or':[{from: user},{to: user}]},function(err,doc){
            if(!err){
                return res.json({code:0,msgs:doc, users: users})
            }
        })
    })
    
})
Router.post('/readmsg',function(req,res){
    const userid = req.cookies.userid
    console.log(userid)
    const {from} = req.body
    Chat.update(
        {from,to:userid},
        {'$set':{read:true}},
        {'multi':true},
        function(err,doc){
            console.log(doc)
            if(!err){
                return res.json({code:0,num:doc.nModified})
            }
            return res.json({code:1,msg:'修改失败'})
        }
    )
})
Router.post('/update',function(req,res){
    const userid = req.cookies.userid
    if(!userid){
        return json.dumps({code:1})
    }
    const body = req.body
    User.findByIdAndUpdate(userid,body,function (err,doc) {
        const data = Object.assign({},{
            user:doc.user,
            type:doc.type
        },body)
        return res.json({code:0,data})
    })
})
Router.post('/login',function(req,res){
    const {user, pwd} = req.body
    User.findOne({user,pwd:md5Pwd(pwd)},_filter,function(err,doc){
        // console.log(doc)
        if(!doc){
            return res.json({code:1,msg:'用户名或密码错误'})
        }
        res.cookie('userid',doc._id)
        return res.json({code:0,data:doc})
    })
})
Router.post('/register',function(req,res){
    console.log(req.body)
    const {user, pwd, type} = req.body
    //查询数据
    User.findOne({user},function(err,doc){
        //查到相同的数据提示用户名重复
        if(doc){
            return res.json({code:1,msg:'用户名重复'})
        }
        //没有相同的就新建
        const userModel = new User({user,type,pwd:md5Pwd(pwd)})
        userModel.save(userModel,function(e,d){
            //新建失败报错
            if(e){
                return res.json({code:1,msg:'后端出错了'})
            }
            const {user,type,_id} = d
            res.cookie('userid',_id)
            //新建成功显示登录成功
            return res.json({
                code:0,
                data: {user,type,_id}
            })
        })
    })
})
Router.get('/info',function(req,res){
    const {userid} = req.cookies
    if(!userid){
        return res.json({code:1})
    }
    User.findOne({_id:userid},_filter,function(err,doc){
        if(err){
            return res.json({code:1, msg:'后端出错了'})
        }
        if(doc){
            return res.json({code:0, data:doc})
        }
    })
})

function md5Pwd(pwd){
    const salt = 'my_first_react_proect_1920x1080xyui!&*^$&SJDAK#^--'
    return utility.md5(utility.md5(pwd+salt))
}

module.exports = Router