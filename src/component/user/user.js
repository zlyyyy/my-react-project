import React from 'react'
import { connect } from 'react-redux'
import { Result, List, WhiteSpace, Modal } from 'antd-mobile';
import browserCookie from 'browser-cookies'
import { Redirect } from 'react-router-dom'
import { logoutSubmit } from '../../redux/user.redux'

@connect(
    state=>state.user,
    {logoutSubmit}
)
// function hello(){
//     console.log('I love react')
// }
// function test(fn) {
//     return function(){
//         console.log('before')
//         fn()
//         console.log('after')
//     }
// }
// hello = test(hello)
// hello()

class User extends React.Component{
    constructor(props){
        super(props)
        this.LogoOut = this.LogoOut.bind(this)
    }
    LogoOut() {
        const alert = Modal.alert
        alert('退出登录', '确定退出登录吗?', [
            { text: '取消', onPress: () => console.log('cancel') },
            { text: '确认', onPress: () => {
                browserCookie.erase('userid')
                this.props.logoutSubmit()
            } },
          ]);
    }
    render(){
        const props = this.props
        const Item = List.Item
        const Brief = Item.Brief
        return props.user?(
            <div>
                <Result
                    img={<img src={require(`../img/${props.avatar}.png`)} style={{width:60}}  alt="" />}
                    title={props.user}
                    message={props.type==='boss'?props.company:null}
                />
                <List renderHeader={()=>'简介'}>
                    <Item multipleLine>
                        {props.title}
                        {props.desc.split('\n').map(v=>
                            <Brief key={v}>{v}</Brief>
                        )}
                        {props.money?<Brief>{props.money}</Brief>:null}
                    </Item>
                </List>
                <WhiteSpace></WhiteSpace>
                <List>
                    <Item onClick={this.LogoOut}>退出登录</Item>
                </List>
            </div>
        ):<Redirect to={props.redirectTo}/>
    }
}

export default User