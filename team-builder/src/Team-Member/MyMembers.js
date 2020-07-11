import React from 'react'

function MyMembers(props) {
    return (
    <div>
        {props.MyMembers.map((data) => (
            <div>
                <h2>{data.teamName}</h2>
                <p>{data.email}</p>
                <p>{data.role}</p>
            </div>
        ))}
    </div> )
}

export default MyMembers