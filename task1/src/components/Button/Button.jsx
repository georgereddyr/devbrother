import React from 'react';
import './Button.css';

export default function Button(props) {
  const {
    className,

  } = props;

  function onClick(e) {
    e.preventDefault();
  }
  return <button className={className} onClick={onClick} type={props.type}></button>
};