import React, { useState } from 'react';

const Form = props => {
  const [data, setData] = useState({
    TeamName: "",
    email: "",
    role: ""
  })

  const changeHandler = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div>
    <form onSubmit={(event) => {

      event.preventDefault()

      props.setNewInfo(data)
      console.log(data)

      setData({TeamName: "", email: "", role: ""})
    }}
    >
      <label htmlFor="TeamName">Name:</label>
      <input 
        id="TeamName" 
        type="text" 
        name="TeamName" 
        placeholder="Please Enter Your Name"
        value={data.TeamName}
        onChange={changeHandler}
        />
        <br />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          name="email"
          placeholder="Please Enter Your Email"
          value={data.email}
          onChange={changeHandler}
        />
        <br />

        <label htmlFor="role">Role:</label>
        <input 
          id="role"
          type="text"
          name="role"
          placeholder="Your Role In Our Team"
          value={data.role}
          onChange={changeHandler}
        /> 
      <button type="submit">Click to Submit!</button>
    </form>
    </div>
    );
};

export default Form;