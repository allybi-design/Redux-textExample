/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { mapStateToProps, mapDispatchToProps } from "./store/container/index";

import "./styles/App.css";


const Wrapper = styled.div`
  margin: 1rem;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  text-align: center;
  ${'' /* font-family: Helvetica; */}
`;

const Button = styled.button`
  margin: 1rem;
  padding: 0.5rem 1.5rem;
`;

const Column = styled.div`
  width: 50%;
  border: 1px solid;
  color: white;
  background: black;
`;

const Li = styled.li`
  list-style: none;
  cursor: pointer;
`;

export class App extends Component {
  render() {
    return (
      <Wrapper>
        <Column>
          <h1>Age: {this.props.age}</h1>
          <Button onClick={() => this.props.incAge()}>AGE UP</Button>
          <Button onClick={() => this.props.decAge()}>AGE DOWN</Button>
          <div> 
            {this.props.isLoading && <img src="./images/loadSpinner.gif" alt="spinner"/>}
          </div>
          <ul>
            {this.props.history &&
              this.props.history.map((el) => (
                <Li key={el.id} onClick={() => this.props.delItem(el.id)}>
                  {el.age}
                </Li>
              ))}
          </ul>
        </Column>

      </Wrapper>
    );
  }
}
// imported containers
export default connect(mapStateToProps, mapDispatchToProps)(App);
