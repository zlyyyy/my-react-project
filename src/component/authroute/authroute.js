import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
@withRouter
class AuthRoute extends React.Component{
    componentDidMount(){
        const publicList = ['/login','/register']
        const pathname = this.props.location.pathname
        if(publicList.indexOf(pathname)>-1){
            return null
        }
        console.log(this.props)
        axios.get('/user/info')
        .then(res=>{
            if(res.status === 200){
                console.log(res.data)
                if(res.data.code === 0){
                    
                }else{
                    this.props.history.push('/login')
                }
            }
        }).catch(error=>{
            console.log(error)
        })
        
    }
    render(){
        return <h2>测试</h2>
    }
}
export default AuthRoute