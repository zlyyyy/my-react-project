import React from 'react'
import { connect } from 'react-redux'
import { List, Badge } from 'antd-mobile';
import { Brief } from 'antd-mobile/lib/list/ListItem';

@connect(
    state=>state
)

class Msg extends React.Component{
    getLastChat(msg) {
        return msg[msg.length-1]
    }
    render(){
        const Item = List.Item
        const Brief = Item.Brief
        const userid = this.props.user._id
        const userinfo = this.props.chat.users
        const msgGroup = {}
        //根据聊天id分组
        this.props.chat.chatmsg.forEach(v => {
            msgGroup[v.chatid] = msgGroup[v.chatid] || []
            msgGroup[v.chatid].push(v)
        });
        console.log(msgGroup)
        // Object.values方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（ enumerable ）属性的键值。
        const chatList = Object.values(msgGroup).sort((a,b)=>{
            const a_last = this.getLastChat(a).create_time
            const b_last = this.getLastChat(b).create_time
            return b_last - a_last
        })
        console.log(chatList)
        return(
            <div>
                {chatList.map(v=>{
                    const lastItem = this.getLastChat(v)
                    const targetId = v[0].from === userid?v[0].to:v[0].from
                    //reader为false或接收对象为当前登录ID
                    const unread = v.filter(v=>!v.read&&v.to==userid).length
                    if(!userinfo[targetId]){
                        return null
                    }
                    return (
                        <List
                        key={lastItem._id}
                        >
                            <Item
                                arrow='horizontal'
                                extra={<Badge text={unread}></Badge>}
                                thumb={require(`../img/${userinfo[targetId].avatar}.png`)}
                                onClick={()=>{
                                    this.props.history.push(`/chat/${targetId}`)
                                }}
                            >
                                {lastItem.content}
                                <Brief>{userinfo[targetId].name}</Brief>
                            </Item>
                        </List>
                    )
                })
                }
            </div>
        )
    }
}

export default Msg