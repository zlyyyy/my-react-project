import React, { Component } from 'react';
import { Button, List } from 'antd-mobile'

class App extends Component{
	render(){
		const name = '小明'
		return (
			<div>
				<h2>我是{name}</h2>
				<Test name='小华' />
				<Test2 name='张三' />
			</div>
		)
	}
}

function Test2(props){
	return <h2>早上好，{props.name}！！！</h2>
}

class Test extends Component{
	constructor(props) {
		super(props)
		this.state = {
			people: ['虎子','柱子','小王']
		}
		// this.addPeople = this.addPeople.bind(this)
		console.log('组件初始化')
	}
	componentWillMount() {
		console.log('组件马上就要挂载')
	}
	componentDidMount() {
		console.log('组件已经挂载')
	}
	componentWillReceiveProps(nextProps) {
		console.log('组件要接收父组件的值了')
	}
	shouldComponentUpdate() {
		console.log('判断是不是要更新组件')
		return true;
	}
	componentWillUpdate() {
		console.log('马上就要更新组件了')
	}
	componentDidUpdate() {
		console.log('组件更新完毕')
	}
	componentWillUnmount() {
		console.log('组件卸载了')
	}
	// addPeople = ()=>{
	addPeople(){
		this.setState({
			people: [...this.state.people,'新人李四'+Math.random()]
		}) 
	}
	render(){
		// const boss = '小华'
		return (
			<div>
				<h2>我是小明的领导{this.props.name}</h2>
				<Button type='primary' onClick={()=>this.addPeople()}>增加新人</Button>
				<List renderHeader={() => '人员列表' }>
					{this.state.people.map(item=>{
						return <List.Item key={item}>{item}</List.Item>
					})}
				</List>
			</div>
		)
	}
}

export default App