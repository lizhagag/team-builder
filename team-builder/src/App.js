import React, { useState } from 'react';
import './App.css';
import Form from './Team-Member/Form'
import MyMembers from './Team-Member/MyMembers';


function App() {
  const [team,setTeam] = useState([]);

  return (
    <div>
      <h1>My Team</h1>
      <Form team={team} setTeam={setTeam} />
      <MyMembers team={team} />
    </div>
  )
}

export default App;