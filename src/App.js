import React, {Fragment} from 'react';
import './App.css';
import Home from './components/layout/Home';
import Navbar from './components/layout/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom'
import Login from './components/auth/Login';
import Register from './components/auth/Register';

const App = () => 
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </Fragment> 
    </Router>

export default App;
