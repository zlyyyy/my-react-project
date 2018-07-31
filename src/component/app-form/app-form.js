import React from 'react'

// HOC高阶组件代码优化
export default function appForm(Com){
    return class wrapperCom extends React.Component{
        constructor(props){
            super(props)
            this.state = {}
            this.handleChange = this.handleChange.bind(this)
        }
        handleChange(key,val){
            console.log(key,val)
            this.setState({
                [key]:val
            })
        }
        render(){
            return <Com
                            handleChange={this.handleChange}
                            state={this.state} {...this.props}>
                        </Com>
        }
    }
}