import React from "react";

import classes from '../../Login/Login.module.css';

const Input = (props) => (
    <div
    className={`${classes.control} ${
      props.isValid === false ? classes.invalid : ""
    }`}
  >
    <label htmlFor={props.id}>{props.label}</label>
    <input
      type={props.type}
      id={props.type}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  </div>
)


export default Input ;