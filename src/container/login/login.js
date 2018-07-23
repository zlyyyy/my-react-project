import React from 'react'
import Logo from '../../component/logo/logo'
import { WingBlank, WhiteSpace, InputItem, Button } from 'antd-mobile'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.register = this.register.bind(this)
    }
    register(){
        console.log(this.props)
        this.props.history.push('/register')
    }
    render(){
        return (
            <div>
                <Logo></Logo>
                <h2>登录页</h2>
                <WingBlank>
                    <InputItem>登录名</InputItem>
                    <WhiteSpace />
                    <InputItem>密码</InputItem>
                    <WhiteSpace />
                    <Button type='primary'>登录</Button>
                    <WhiteSpace />
                    <Button type='primary' onClick={this.register}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login
