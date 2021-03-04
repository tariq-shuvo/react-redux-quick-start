import React, {Fragment} from 'react';
import './App.css';
import Home from './components/layout/Home';
import Navbar from './components/layout/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Login from './components/auth/Login';
import Register from './components/auth/Register';

// Redux Initialization
import {Provider} from 'react-redux'
import store from './store'

const App = () => 
    <Provider store={store}>
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
    </Provider>

export default App;
