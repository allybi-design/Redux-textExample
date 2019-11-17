import React, { useEffect, Fragment, useRef } from "react";

const Cockpit = props => {
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    toggleBtnRef.current.click();
    // toggleBtnRef.current.click();
  }, []);

  return (
    <Fragment>
     
      <h1>Hi, Welcome to</h1>
      <h3>{props.title}</h3>
      <p className="primary">This is really working!</p>
      <button
        ref={toggleBtnRef}
        className={props.btnClass}
        onClick={props.togglePersonHandler}
      >
        Show Names
      </button>
      <button onClick={props.isAuthClickedHandler} className="btn">
        Log In
      </button>
      <br />
    </Fragment>
  );
};

export default Cockpit;
