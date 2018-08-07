import React from 'react'
import { connect } from 'react-redux'
import { NavBar } from 'antd-mobile';
import { Switch, Route } from 'react-router-dom'
import Boss from '../boss/boss'
import Genius from '../genius//genius'
import Msg from '../msg/msg'
import User from '../user/user'
import NavLinkBar from '../navlinkbar/navlinkbar';
import { getMsgList , recvmsg } from '../../redux/chat.redux'

@connect(
    state =>state,
    { getMsgList , recvmsg }
)
class Dashboard extends React.Component{
    componentDidMount(){
        this.props.getMsgList()
        this.props.recvmsg()
    }
    render(){
        const {pathname} = this.props.location
        const user = this.props.user
        const navList = [
            {
                path: '/boss',
                text: '牛人',
                icon: 'boss',
                title: '牛人列表',
                component: Boss,
                hide: user.type === 'genius'
            },
            {
                path: '/genius',
                text: 'boss',
                icon: 'job',
                title: 'Boss列表',
                component: Genius,
                hide: user.type === 'boss'
            },
            {
                path:'/msg',
                text: '消息',
                icon: 'msg',
                title: '消息列表',
                component: Msg
            },
            {
                path: '/me',
                text: '我',
                icon: 'user',
                title: '个人中心',
                component: User
            }
        ]
        return(
            <div>
                <NavBar
                    mode="dark"
                >{navList.find(v=>v.path===pathname).title}</NavBar>
                <div>
                    <Switch>
                        {navList.map(v=>(
                            <Route key={v.path} path={v.path} component={v.component}></Route>
                        ))}
                    </Switch>
                </div>
                <NavLinkBar data={navList}></NavLinkBar>
            </div>
        )
    }
}

export default Dashboard