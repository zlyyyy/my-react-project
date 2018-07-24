import React from 'react'
import Logo from '../../component/logo/logo'
import { WingBlank, WhiteSpace, InputItem, Button, List, Radio } from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { register } from '../../redux/user.redux'

@connect(
    state=>state.user,
    {register}
)
class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user: '',
            pwd: '',
            repeatpwd: '',
            type: 'genius' //或者boss
        }
        this.handleRegister = this.handleRegister.bind(this)
    }
    handleChange(key,val){
        this.setState({
            [key]:val
        })
    }
    handleRegister(){
        this.props.register(this.state)
        console.log(this.state)
    }
    render(){
        const RadioItem = Radio.RadioItem
        return (
            <div>
                {this.props.redirectTo? <Redirect to={this.props.redirectTo} />:null}
                <Logo></Logo>
                {this.props.msg?<p className='err-msg'>{this.props.msg}</p>:null}
                <h2>注册页</h2>
                <WingBlank>
                    <InputItem
                        onChange={val=>this.handleChange('user',val)}
                    >用户名</InputItem>
                    <WhiteSpace />
                    <InputItem
                        type='password'
                        onChange={val=>this.handleChange('pwd',val)}
                    >密码</InputItem>
                    <WhiteSpace />
                    <InputItem
                        type='password'
                        onChange={val=>this.handleChange('repeatpwd',val)}
                    >密码验证</InputItem>
                    <WhiteSpace />
                    <List>
                        <RadioItem
                            checked = {this.state.type === 'genius'}
                            onChange={()=>this.handleChange('type','genius')}                        
                        >牛人</RadioItem>
                        <RadioItem
                            checked = {this.state.type === 'boss'}
                            onChange={()=>this.handleChange('type','boss')} 
                        >老板</RadioItem>
                    </List>
                    <WhiteSpace />
                    <Button type='primary' onClick={this.handleRegister}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Register
