import React from 'react'

function MyMembers(props) {
    return (
    <div>
        {props.team.map((data) => (
            <div>
                <h2>My Name : {data.teamName}</h2>
                <p>{data.email}</p>
                <p>{data.role}</p>
            </div>
        ))}
    </div> )
}

export default MyMembers