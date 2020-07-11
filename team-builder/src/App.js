import React, { useState } from 'react';
import './App.css';
import Form from './Team-Member/Form';
import MyMembers from './Team-Member/MyMembers'

function App() {

  const [teamMember, setTeamMember] =useState([
    {
      teamName: "Name",
      email: "Email",
      role: "Role"
    }
  ])

  const setNewInfo = (newInfo) => {
    setTeamMember([...teamMember,newInfo])
  }


  return (
      <div className="App">
        <h1>Team Members</h1>
        <Form setNewInfo={setNewInfo} />
        <MyMembers setNewInfo={setNewInfo} />
      </div>   
  );
}

export default App;