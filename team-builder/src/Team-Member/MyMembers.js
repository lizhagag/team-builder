import React from 'react'



function MyMembers(props) {
    return (
    <div>
        <div className='member-div'>
            {props.team.map((data) => (
                <div className="members">
                    <h2>{data.role}</h2>
                    <p>Contact Info:</p>
                    <p>{data.TeamName}</p>
                    <p>{data.email}</p>         
                </div>
            ))}
        </div>
    </div>
    )
}

export default MyMembers