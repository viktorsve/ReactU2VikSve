import React, { Fragment } from 'react';
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import styles from './UserComponent.module.css'

/*
Component used for rendering all the list items in the users list that is passed here
as a prop. Will filter the users based on the key value of isActive. 
The text color of the list items will depend on the value it gets from props.
*/
const UserComponent = props => {
  return (
    <Fragment>
      {props.users.filter(user => user.isActive === props.toggleUsers).map((user, i) => (
        <NavLink to={`/user/${user.name}`} style={{textDecoration: "none"}} key={i}>
          <ListGroup.Item className={props.color ? styles.blue : styles.red}>
            {user.id}. {user.name} <br/> user is: {user.isActive ? "Active" : "Inactive"}
          </ListGroup.Item>
        </NavLink>
      ))}
    </Fragment>
  );
}

UserComponent.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired
  })),
  toggleUsers: PropTypes.bool.isRequired
}

export default UserComponent;
