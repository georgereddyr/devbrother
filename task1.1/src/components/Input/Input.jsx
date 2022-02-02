import React from "react";
import './Input.css';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {value: this.props.value};
  }

  onChangeHandler = (e) => {
    this.props.onChange(e);
    this.setState( { value: e.target.value } );
    console.log(this.setState.value)
  }

  render() {
    return <input name='name' type={ this.props.type } value={ this.state.value } {...this.props} onChange={ this.onChangeHandler } />
  }
} 