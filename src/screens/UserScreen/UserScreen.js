import React, { Component } from 'react';
import CardComponent from '../../components/CardComponent/CardComponent';

// Screen component used for displaying our user screen
class UserScreen extends Component {
  // Lifecycle method that render our JSX code into the DOM
  render() {
    return (
      <div className="wrapper">
        <CardComponent>
          <p>Selected user: {this.props.match.params.user}</p>
        </CardComponent>
      </div>
    )
  }
}

export default UserScreen;
