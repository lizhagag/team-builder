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
    if (TeamName && email && role) {
      props.setTeam([...props.team, {TeamName, email, role}])
    }
    resetForm();
  }

  const resetForm = () => {
    setTeamName("");
    setEmail("");
    setRole("");
  };

  return (
    <div>
    <form onSubmit={handleSubmit} className="FormStyle">
    <h1>New Team Members</h1>
    <p>Enter Your Member Information Here</p>
      <input 
        id="TeamName" 
        type="text" 
        name="TeamName" 
        placeholder="Please Enter Your Name"
        value={TeamName}
        onChange={handleTeamName}
        />
        <br />

        <input
          id="email"
          type="text"
          name="email"
          placeholder="Please Enter Your Email"
          value={email}
          onChange={handleEmail}
        />
        <br />

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