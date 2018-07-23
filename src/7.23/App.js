import React from 'react'
import { connect } from 'react-redux'
import { addNum, removeNum, addNumAsync } from './index.redux'
import axios from 'axios';


// const actionCreators = { addNum, removeNum, addNumAsync }
// App = connect(mapStatetoProps, actionCreators)(App)
@connect(
    //需要state什么属性放到props里
    state=>({num:state}),
    //需要什么方法放到props里，自动dispatch;
    { addNum, removeNum, addNumAsync }
)
class App extends React.Component{
    componentDidMount(){
        axios.get('/data')
            .then(res=>{
                if(res.status===200){
                    console.log(res.data);
                }
            })
    }
    render(){
        return (
            <div>
                <h1>现在的state是{this.props.num}</h1>
                <button onClick={this.props.addNum}>加</button>
                <button onClick={this.props.removeNum}>减</button>
                <button onClick={this.props.addNumAsync}>两秒后加</button>
            </div>
        )
    }
}
// const mapStateToProps = (state, ownProps) => {
//     return {
//         prop: state.prop
//     }
// } 
// const mapStatetoProps = (state) => {
//     return {
//         num: state
//     }
// }

export default App