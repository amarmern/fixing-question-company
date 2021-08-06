import React from "react";
import "./styles.css";

const Button = (props) => {
  //const [state , setState] = React.useState("")
  const handleChange = () => {
    console.log("event");
  };
  return (
    <button className="click-button" handleChange={handleChange}>
      {props.children}
    </button>
  );
};
export default Button;
