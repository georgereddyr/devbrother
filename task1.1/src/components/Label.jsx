import React from 'react';
import '../App.css';

export default class Label extends React.Component { 
  render() {
    return <label htmlFor="randomName">{this.props.children}</label>
  }
}
