import React from "react";

export default function validation(props) {
  let message = null;

  if (props.length === 0) {
    message = null
  } else if (props.length < 5 && props.length >= 1) {
    message = "Text too Short";
  } else {
    message = "Text Long Enough";
  }

  return <div>{message}</div>;
}
