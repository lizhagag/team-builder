import React, { useState } from 'react';


const Form = props => {
  const [TeamName, setTeamName] = useState("")
  const handleTeamName = event => setTeamName(event.target.value);

  const [email, setEmail] = useState("")
  const handleEmail = event => setEmail(event.target.value);
  
  const [role, setRole] = useState("")
  const handleRole = event => setRole(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    if (TeamName && email) {
      props.setTeam([...props.team, {TeamName, email}])
    }
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="TeamName">Name:</label>
      <input 
        id="TeamName" 
        type="text" 
        name="TeamName" 
        placeholder="Please Enter Your Name"
        value={TeamName}
        onChange={handleTeamName}
        />
        <br />

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="text"
          name="email"
          placeholder="Please Enter Your Email"
          value={email}
          onChange={handleEmail}
        />
        <br />

        <label htmlFor="role">Role:</label>
        <input
          id="role"
          type="text"
          name="role"
          placeholder="Please Enter Your Role"
          value={role}
          onChange={handleRole}
        />

        <br />

        <label htmlFor="submit">
        <input
          id="submit"
          type="submit"
          name="submit"
        />
        </label>

    </form>

    </div>
    );
};

export default Form;