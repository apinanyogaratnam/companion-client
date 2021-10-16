import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Register from './Register';

import Login from './Login';
import Landing from './Landing';

const apiURL = 'https://server.companionapp.xyz';

function App() {
  const email = ""
  const username = ""
  const password = ""


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Landing/>
          </Route>
          <Route exact path='/login'>
            <Login/>
          </Route>
          <Route exact path='/register'>
            <Register/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
