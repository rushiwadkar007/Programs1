import React, { Component } from 'react';
import Login from './login/Login';
import Home from './home/Home';
import Profile from './profile/Profile';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class Controller extends Component {

  constructor() {
    super();
    this.baseUrl = "https://api.instagram.com/v1/users/self/media/recent?access_token=";
  }
  render() {
    return (
      <Router>
        <div className="main-container">
          <Route exact path='/' render={(props) => <Login {...props} baseUrl={this.baseUrl} />} />
          <Route exact path='/home' render={(props) => <Home {...props} baseUrl={this.baseUrl} />} />
          <Route exact path='/profile' render={(props) => <Profile {...props} baseUrl={this.baseUrl} />} />
        </div>
      </Router>
    )
  }
}

export default Controller;
