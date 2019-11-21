import React, { Component } from "react"
import styled from "styled-components"

import "../styles/App.css"

const Wrapper = styled.div`
  margin: 1rem;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  text-align: center;
`

const Button = styled.button`
  margin: 1rem;
  padding: 0.5rem 1.5rem;
`

const Column = styled.div`
  width: 50%;
  border: 1px solid;
  color: white;
  background: black;
`

const Li = styled.li`
  list-style: none;
  cursor: pointer;
`

export const AppPage = (props) => {
  return (
    <Wrapper>
      <Column>
        <h1>Age: {props.age}</h1>
        <Button onClick={() => props.incAge(10)}>AGE UP</Button>
        <Button onClick={() => props.decAge(10)}>AGE DOWN</Button>
        <div> 
          {props.isLoading && <img src="./images/loadSpinner.gif" alt="spinner"/>}
        </div>
        <ul>
          {props.history &&
            props.history.map((el) => (
              <Li key={el.id} onClick={() => props.delItem(el.id)}>
                {el.age}
              </Li>
            ))}
        </ul>
      </Column>
    </Wrapper>
  );
}



