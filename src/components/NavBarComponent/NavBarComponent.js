import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import LoginScreen from '../../screens/LoginScreen/LoginScreen';
import DashboardScreen from '../../screens/DashboardScreen/DashboardScreen';
import UserScreen from '../../screens/UserScreen/UserScreen';
import './NavBarComponent.css';

// Component used for handling the navigation bar and setting up routes for our app.
class NavBarComponent extends Component {
  // Lifecycle method that render our JSX code into the DOM
  render() {
    return (
      <Router>
        <Nav>
          <NavLink to="/login" className="navlink" style={{ textDecoration: "none" }}
          activeClassName="active">Login</NavLink>
          <NavLink to="/dashboard" className="navlink" style={{ textDecoration: "none" }}
          activeClassName="active">Dashboard</NavLink>
          <NavLink to="/user/" className="navlink" style={{ textDecoration: "none" }}
          activeClassName="active">User</NavLink>
        </Nav>

        <Switch>
          <Route exact path="/" render={() => <Redirect to="/login"/>} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/dashboard" component={DashboardScreen} />
          <Route path="/user/:user" component={UserScreen} />
          <Redirect from="/user" to="/login"/>
        </Switch>
      </Router>
    );
  }
}

export default NavBarComponent;
