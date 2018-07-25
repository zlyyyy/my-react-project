import React from 'react'
import { NavBar, InputItem, TextareaItem, Button, WhiteSpace } from 'antd-mobile'
import AvatarSelector from '../../component/avatar-selector/avatar-selector';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { update } from '../../redux/user.redux'

@connect(
    state=>state.user,
    {update}
)
class bossInfo extends React.Component{
    constructor(state){
        super(state)
        this.state = {
            title: '',
            company: '',
            money: '',
            dec: ''
        }
    }
    handleChange(key,val){
        this.setState({
            [key]:val
        })
    }
    render(){
        const path = this.props.location.pathname
        const redirect = this.props.redirectTo
        return(
            <div>
                {redirect&&redirect!==path? <Redirect to={this.props.redirectTo} />:null}
                <NavBar mode="dark">boss完善信息页</NavBar>
                <AvatarSelector
                    selectAvatar = {val => this.handleChange('avatar',val)}
                ></AvatarSelector>
                <InputItem
                    onChange = {val=>this.handleChange('title',val)}
                >招聘职位</InputItem>
                <InputItem
                    onChange = {val=>this.handleChange('company',val)}
                >公司名称</InputItem>
                <InputItem
                    onChange = {val=>this.handleChange('money',val)}
                >职位薪资</InputItem>
                <TextareaItem
                    title='职位简介'
                    rows={5}
                    autoHeight
                    onChange = {val=>this.handleChange('dec',val)}
                ></TextareaItem>
                <WhiteSpace></WhiteSpace>
                <Button
                    onClick = {()=>this.props.update(this.state)}
                    type='primary'>保存</Button>
            </div>
        )
    }
}


export default bossInfo