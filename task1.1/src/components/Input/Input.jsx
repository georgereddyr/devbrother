import React from "react";
import './Input.css';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {value: '', type: '', name: ''};
  }

  onChangeHandler = (e) => {
    this.setState({ value: e.target.value });
  }

  render() {
    return <input name={ this.props.name } type={ this.props.type } value={ this.state.value } onChange={ this.onChangeHandler } />
  }
} 