import React, { Component, Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import UserComponent from '../UserComponent/UserComponent';
import CardComponent from '../CardComponent/CardComponent';
import styles from './DashboardComponent.module.css';

/*
Our main container component used for storing our list of users as a state that
will be passed to our other components as props. Also handles the color state
which will toggle the color of our list items. The form that is rendered in this
component will update the users list in state.
*/
class DashboardComponent extends Component {
  state = {
    users: [{
        id: 1,
        name: 'Mimmi',
        isActive: true
      },
      {
        id: 2,
        name: 'Kalle',
        isActive: false
      },
      {
        id: 3,
        name: 'Klara',
        isActive: true
      },
      {
        id: 4,
        name: 'John',
        isActive: true
      },
      {
        id: 5,
        name: 'Stina',
        isActive: false
      }
    ],
    value: "",
    color: true,
    toggleUsers: true
  }

  // Updates value state to the current value of the event object that is passed as an argument
  handleChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  /*
  Prevents the default behavior of the element. Updates the users list in state
  and adds a new user object to our list of users. Also resets value in state.
  */
  addUser = event => {
    event.preventDefault()
    const user = {
      id: this.state.users.length + 1,
      name: this.state.value,
      isActive: true
    }
    this.setState(prevState => ({
      users: [...prevState.users, user]
    }))
    this.setState({
      value: ""
    })
  }

  // Updates the users list in state and removes the last object in the list
  removeUser = () => {
    this.setState(prevState => ({
      users: prevState.users.slice(0, prevState.users.length - 1)
    }))
  }

  // Updates the key value of color to the opposite boolean value
  toggleColor = () => {
    this.setState(prevState => ({
      color: !prevState.color
    }))
  }

  // Updates the key value of toggleUsers to the opposite boolean value
  toggleUsers = () => {
    this.setState(prevState => ({
      toggleUsers: !prevState.toggleUsers
    }))
  }

  // Lifecycle method that render our JSX code into the DOM
  render() {
    return (
      <Fragment>
        <CardComponent>
          <Button variant={this.state.toggleUsers ? "info" : "secondary"} onClick={this.toggleUsers} className={styles.toggleusers} block>{this.state.toggleUsers ? "Show Inactive" : "Show Active"}</Button>
          <ListGroup as="ul">
            <UserComponent users={this.state.users} color={this.state.color} toggleUsers={this.state.toggleUsers}/>
          </ListGroup>
          <Button variant="info" onClick={this.toggleColor} className={styles.togglecolor} block>Toggle Colors</Button>
        </CardComponent>
        <CardComponent>
          <Form onSubmit={this.addUser}>
            <Form.Group>
              <Form.Control type="text" placeholder="new user.." value={this.state.value} onChange={this.handleChange}/>
            </Form.Group>
            <Form.Group>
              <Button type="submit" value="Submit" variant="success" onClick={this.addUser} disabled={!this.state.value} block>Add</Button>
            </Form.Group>
            <Button variant="danger" onClick={this.removeUser} block>Remove</Button>
          </Form>
        </CardComponent>
      </Fragment>
    );
  }
}

export default DashboardComponent;
