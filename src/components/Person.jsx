import React, { Component } from "react";
import PropTypes from "prop-types";

import "../styles/Card.css";

export class Person extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log("Called - Person -> getDerivedStateFromProps");
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Called - Person - shouldCompoentUpdate");
    return true; //NB shoulld ALWAYS return true/false
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  // getSnapshotBeforeUpdate(prevprops, prevState) {
  //   console.log("Called - Person -> getSnapShotBeforeUpdate");
  //   return null;
  // }

  render() {
    return (
      <li className="card">
        {this.props.isAuth ? <p>Authenticated</p> : <p>Log In</p>}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          ref={this.inputRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </li>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  chnaged: PropTypes.func
};

export default Person;
