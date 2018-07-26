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
class geniusInfo extends React.Component{
    constructor(state){
        super(state)
        this.state = {
            title: '',
            desc: ''
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
                <NavBar mode="dark">牛人完善信息页</NavBar>
                <AvatarSelector
                    selectAvatar = {val => this.handleChange('avatar',val)}
                ></AvatarSelector>
                <InputItem
                    onChange = {val=>this.handleChange('title',val)}
                >求职职位</InputItem>
                <TextareaItem
                    title='个人简介'
                    rows={5}
                    autoHeight
                    onChange = {val=>this.handleChange('desc',val)}
                ></TextareaItem>
                <WhiteSpace></WhiteSpace>
                <Button
                    onClick = {()=>this.props.update(this.state)}
                    type='primary'>保存</Button>
            </div>
        )
    }
}


export default geniusInfo