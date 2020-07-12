import React, { useState } from 'react';
import './App.css';
import Form from './Team-Member/Form'
import MyMembers from './Team-Member/MyMembers';
import {BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Nav from './Team-Member/Nav'

function App() {
  const [team,setTeam] = useState([]);

  return (
    <Router>
      <Nav />
      <div className="Home-Page">
      <Route exact path="/Team-Member/Form"><Form team={team} setTeam={setTeam} /></Route>
      <Route path="/Team-Member/MyMembers"><MyMembers team={team} /></Route>
      </div>
    </Router>
  )
}

export default App;