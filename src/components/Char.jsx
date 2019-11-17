import React from "react";

const Char = (props) =>{
  return (
    <li className="char" onClick={props.click}>
      <h1>{props.char}</h1>
    </li>
  );
}

export default Char