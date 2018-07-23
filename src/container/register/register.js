import React from 'react'
import Logo from '../../component/logo/logo'
import { WingBlank, WhiteSpace, InputItem, Button, List, Radio } from 'antd-mobile'

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            type: 'genius' //或者boss
        }
    }
    render(){
        const RadioItem = Radio.RadioItem
        return (
            <div>
                <Logo></Logo>
                <h2>注册页</h2>
                <WingBlank>
                    <InputItem>用户名</InputItem>
                    <WhiteSpace />
                    <InputItem>密码</InputItem>
                    <WhiteSpace />
                    <InputItem>密码验证</InputItem>
                    <WhiteSpace />
                    <List>
                        <RadioItem checked = {this.state.type === 'genius'}>牛人</RadioItem>
                        <RadioItem checked = {this.state.type === 'boss'}>老板</RadioItem>
                    </List>
                    <WhiteSpace />
                    <Button type='primary'>登录</Button>
                    <WhiteSpace />
                    <Button type='primary' onClick={this.register}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Register
