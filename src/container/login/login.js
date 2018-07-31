import React from 'react'
import Logo from '../../component/logo/logo'
import { WingBlank, WhiteSpace, InputItem, Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from '../../redux/user.redux'
import appForm from '../../component/app-form/app-form'

@connect(
    state=>state.user,
    {login}
)
@appForm
class Login extends React.Component{
    constructor(props){
        super(props)
        this.register = this.register.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }
    register(){
        this.props.history.push('/register')
    }
    // handleChange(key,val){
    //     this.setState({
    //         [key]:val
    //     })
    // }
    handleLogin(){
        this.props.login(this.props.state)
    }
    render(){
        return (
            <div>
                {this.props.redirectTo&&this.props.redirectTo!=='/login'? <Redirect to={this.props.redirectTo} />:null}
                <Logo></Logo>
                {this.props.msg?<p className='err-msg'>{this.props.msg}</p>:null}
                <h2>登录页</h2>
                <WingBlank>
                    <InputItem
                        onChange={val=>this.props.handleChange('user',val)}
                    >登录名</InputItem>
                    <WhiteSpace />
                    <InputItem
                        type='password'
                        onChange={val=>this.props.handleChange('pwd',val)}
                    >密码</InputItem>
                    <WhiteSpace />
                    <Button type='primary' onClick={this.handleLogin}>登录</Button>
                    <WhiteSpace />
                    <Button type='primary' onClick={this.register}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login
