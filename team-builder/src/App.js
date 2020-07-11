import React, { useState } from 'react';
import './App.css';
import Form from './Team-Member/Form'
import MyMembers from './Team-Member/MyMembers';
import {BrowserRouter as Router } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'

function App() {
  const [team,setTeam] = useState([]);

  return (
    <Router>
    <div>
      <Route exact path="/"><h1>My Team</h1></Route>
      <Route exact path="/"><Form team={team} setTeam={setTeam} /></Route>
      <Link to ="/Team-Member/MyMembers">See Our Team Members Here</Link>
      <Route path="/Team-Member/MyMembers"><MyMembers team={team} /></Route>
    </div>
    
    </Router>
  )
}

export default App;