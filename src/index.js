import React from 'react'
import Reactdom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import App from './app'
import { counter, addNum, removeNum, addNumAsync } from './index.redux'


// 创建 Redux store 来存放应用的状态。
const store = createStore(counter,compose(
    applyMiddleware(thunk),
    window.devToolsExtension? window.devToolsExtension():f=>f
))

function render(){
    Reactdom.render(<App store={store} addNum={addNum} removeNum={removeNum} addNumAsync={addNumAsync} />,document.getElementById('root'))
}
render()

//手动更新
store.subscribe(render)
// function counter(state = 0, action){
//     switch (action.type) {
//         case 'INCREMENT' :
//             return state + 1;
//         case 'DECREMENT' :
//             return state - 1;
//         default:
//             return state
//     }
// }

//创建Redux store 来存放应用的状态
// API 是{ subscribe, dispatch, getState }
// let store = createStore(counter);

//可以手动订阅更新，也可以事件绑定到视图层
// store.subscribe(() =>
//     console.log(store.getState())
// )

//改变内部state的唯一方法是dispatch一个action
//action可以被序列化，用日记记录和储存下来，后期还可以以回放的方式执行
// store.dispatch({ type: 'INCREMENT' })
// store.dispatch({ type: 'INCREMENT' })
// store.dispatch({ type: 'INCREMENT' })
// store.dispatch({ type: 'DECREMENT' })