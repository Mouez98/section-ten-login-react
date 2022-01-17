import React,{ useRef, useImperativeHandle} from "react";

import classes from '../../Login/Login.module.css';

const Input = React.forwardRef((props, ref) => {
   const inputRef = useRef();
   
  //  useEffect(()=>{
  //    inputRef.current.focus()
  //  }, [])
  const activate = ()=>{
    inputRef.current.focus();
  }
   
  useImperativeHandle(ref, ()=>{
     return {
       focus: activate
     }
  })
   
   
   return (<div
    className={`${classes.control} ${
      props.isValid === false ? classes.invalid : ""
    }`}
  >
    <label htmlFor={props.id}>{props.label}</label>
    <input
      ref={inputRef}
      type={props.type}
      id={props.type}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  </div>
)});


export default Input ;