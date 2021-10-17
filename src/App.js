import { useState } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Register from './Register';
import Login from './Login';
import Landing from './Landing';
import Assess from './Assess';
import Companion from './Companion';
import Diary from './Diary';

function App() {
  const [user, setUser] = useState({
    _id: '616b918b2749f77e074616ac',
    email: 'demo@demo.user',
    firstName: 'Demo',
    lastName: 'User',
    password: 'password',
    logs: []
  });
  
  return (
    <div className="App flex-column">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Landing/>
          </Route>
          <Route exact path='/login'>
            <Login setUser={setUser}/>
          </Route>
          <Route exact path='/register'>
            <Register setUser={setUser}/>
          </Route>
          <Route exact path='/assess'>
            <Assess user={user}/>
          </Route>
          <Route exact path='/companion'>
            <Companion user={user}/>
          </Route>
          <Route exact path='/diary'>
            <Diary user={user}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
