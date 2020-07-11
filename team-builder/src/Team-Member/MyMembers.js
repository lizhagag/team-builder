import React from 'react'
import {Link } from 'react-router-dom'
function MyMembers(props) {
    return (
    <div>
        <Link to ="/"><h2>Home</h2></Link>

        {props.team.map((data) => (
            <div>
                <h2>My Name : {data.TeamName}</h2>
                <p>{data.email}</p>
                <p>{data.role}</p>
            </div>
        ))}
        
    </div> )
}

export default MyMembers