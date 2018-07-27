import React from 'react'
import PropTypes from 'prop-types'

class NavLinkBar extends React.Component{
    static propTypes = {
        data: PropTypes.array.isRequired
    }
    render(){
        const navList = this.props.data.filter
        return(
            <h1>navbar</h1>
        )
    }
}

export default NavLinkBar