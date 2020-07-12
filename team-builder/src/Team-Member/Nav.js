import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className="NavBar">
            <Link to ="/">Home</Link>
            <Link to ="/Team-Member/MyMembers">Team Members</Link>
            <Link to = "/Team-Member/Form">Form</Link>
        </nav>
    )
}

export default Nav
