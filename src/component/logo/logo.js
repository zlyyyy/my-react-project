import React from 'react'
import logo from './job.png'
import './logo.css'

class Logo extends React.Component{
    render(){
        return (
            <div className='container-logo'>
                <img src={logo} alt='' />
            </div>
        )
    }
}

export default Logo