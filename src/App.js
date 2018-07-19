import React from 'react'

class App extends React.Component{
    render(){
        const store = this.props.store
        const num = store.getState()
        const addNum = this.props.addNum
        const removeNum = this.props.removeNum
        const addNumAsync = this.props.addNumAsync
        return (
            <div>
                <h1>现在的state是{num}</h1>
                <button onClick={() =>store.dispatch(addNum())}>加</button>
                <button onClick={() =>store.dispatch(removeNum())}>减</button>
                <button onClick={() =>store.dispatch(addNumAsync())}>两秒后加</button>
            </div>
        )
    }
}

export default App