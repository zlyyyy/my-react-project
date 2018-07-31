import React from 'react'
import Logo from '../../component/logo/logo'
import { WingBlank, WhiteSpace, InputItem, Button, List, Radio } from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { register } from '../../redux/user.redux'
import appForm from '../../component/app-form/app-form'

@connect(
    state=>state.user,
    {register}
)
@appForm
class Register extends React.Component{
    constructor(props){
        super(props)
        this.handleRegister = this.handleRegister.bind(this)
    }
    componentDidMount(){
        this.props.handleChange('type','genius')
    }
    handleRegister(){
        this.props.register(this.props.state)
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
                        onChange={val=>this.props.handleChange('user',val)}
                    >用户名</InputItem>
                    <WhiteSpace />
                    <InputItem
                        type='password'
                        onChange={val=>this.props.handleChange('pwd',val)}
                    >密码</InputItem>
                    <WhiteSpace />
                    <InputItem
                        type='password'
                        onChange={val=>this.props.handleChange('repeatpwd',val)}
                    >密码验证</InputItem>
                    <WhiteSpace />
                    <List>
                        <RadioItem
                            checked = {this.props.state.type === 'genius'}
                            onChange={()=>this.props.handleChange('type','genius')}                        
                        >牛人</RadioItem>
                        <RadioItem
                            checked = {this.props.state.type === 'boss'}
                            onChange={()=>this.props.handleChange('type','boss')} 
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
