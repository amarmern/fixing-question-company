import React from "react";
import "./styles.css";

const Button = (props) => {
  //const [state , setState] = React.useState("")

  return (
    <button className="click-button" onClick={props.handleChange}>
      {props.children}
    </button>
  );
};
export default Button;
