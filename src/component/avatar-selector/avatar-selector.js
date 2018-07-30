import React from 'react'
import { Grid, List } from 'antd-mobile';
import { PropTypes } from 'prop-types'

class AvatarSelector extends React.Component{
    static propTypes = {
        selectAvatar: PropTypes.func.isRequired
    }
    constructor(state){
        super(state)
        this.state = {

        }
    }
    render(){
        const avatarList = 'boy,girl,man,woman,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra'
                                                .split(',')
                                                .map(v=>({
                                                    icon:require(`../img/${v}.png`),
                                                    name: v 
                                                }))
        const gridHeader = this.state.icon?(<div>
                                                                    <span>已选择头像</span>
                                                                    <img src={this.state.icon} alt=''/>
                                                                    <span>{this.state.name}</span>
                                                                </div>):'请选择头像'
        return(
            <div>
                <List renderHeader={()=>gridHeader}>
                    <Grid 
                        data={avatarList} 
                        columnNum={5} 
                        onClick = {ele=>{
                            this.setState(ele)
                            this.props.selectAvatar(ele.name)
                        }}
                        activeStyle={false}/>
                </List>
            </div>
            
        )
    }
}

export default AvatarSelector