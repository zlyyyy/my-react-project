import React from 'react'
import Reactdom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route,Switch } from 'react-router-dom'

import AuthRoute from './component/authroute/authroute';
import BossInfo from './container/bossinfo/bossinfo'
import GeniusInfo from './container/geniusinfo/geniusinfo'
import Login from './container/login/login';
import Register from './container/register/register';
import Chat from './component/chat/chat'
import Dashboard from './component/dashboard/dashboard';
import reducers from './reducer'
import './config';
import './index.css'


// 创建 Redux store 来存放应用的状态。
const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    window.devToolsExtension? window.devToolsExtension():f=>f
))
Reactdom.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <AuthRoute></AuthRoute>
                <Switch>
                    <Route path='/bossinfo' component={BossInfo} ></Route>
                    <Route path='/geniusinfo' component={GeniusInfo} ></Route>
                    <Route path='/login' component={Login} ></Route>
                    <Route path='/register' component={Register} ></Route>
                    <Route path='/chat/:user' component={Chat} ></Route>
                    <Route component={Dashboard}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
