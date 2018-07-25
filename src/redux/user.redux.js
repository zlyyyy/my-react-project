import Axios from "axios";
import { getRedirecPath } from "../util";

const AUTH_SUCCESS = 'AUTH_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const LOAD_DATA = 'LOAD_DATA'
const initState={
    redirectTo: '',
    msg: '',
    user: '',
    pwd: '',
    type: ''
}
//reducer
export function user(state=initState,action){
    switch(action.type){
        case AUTH_SUCCESS:
            return {...state, msg: '', redirectTo:getRedirecPath(action.payload), ...action.payload}
        case LOAD_DATA:
            return {...state, ...action.payload}
        case ERROR_MSG:
            return {...state, isAuth:false, msg:action.msg}
        default:
            return state
    }
}

//完善信息
function authSuccess(data) {
    return { type:AUTH_SUCCESS, payload:data }
}
// //登录成功
// function loginSuccess(data){
//     return { type:LOGIN_SUCCESS, payload:data }
// }
// //注册成功
// function registerSuccess(data){
//     return { type:REGISTER_SUCCESS, payload:data }
// }
//错误信息
function errorMsg(msg){
    return { msg, type:ERROR_MSG }
}

//用户信息
export function loadData(userinfo) {
    return { type: LOAD_DATA, payload:userinfo}
}


//完善信息
export function update(data){
    return dispatch=>{
        Axios.post('/user/update',data)
        .then(res=>{
            if(res.status===200&&res.data.code===0){
                dispatch(authSuccess(res.data.data))
            }else{
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}
//登录验证
export function login({user,pwd}){
    if(!user||!pwd){
        return errorMsg('用户名密码必须输入')
    }
    return dispatch=>{
        Axios.post('/user/login',{user,pwd})
        .then(res=>{
            if(res.status===200&&res.data.code===0){
                dispatch(authSuccess(res.data.data))
            }else{
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}
//注册验证
export function register({user,pwd,repeatpwd,type}){
    if(!user||!pwd||!type){
        return errorMsg('用户名密码必须输入')
    }
    if(pwd!==repeatpwd){
        return errorMsg('密码和确认密码不同')
    }
    return dispatch=>{
        Axios.post('/user/register',{user,pwd,type})
        .then(res=>{
            if(res.status===200&&res.data.code===0){
                dispatch(authSuccess({user,pwd,type}))
            }else{
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
    
}