import React, { Component } from "react";
import Person from "./Person";

class People extends Component {
  // componentWillUnmount() {
  //   console.log("People - componentWillUnMount");
  // }

  render() {
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          value={person.name}
          click={() => this.props.del(index)}
          changed={event => this.props.changed(event, index)}
          isAuth={this.props.isAuth}
        >
          Name:{person.name}
        </Person>
      );
    });
  }
}

export default People;
