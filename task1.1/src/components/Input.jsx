import React from "react";
export default class Input extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {value: ''};
  }

  onChangeHandler = (e) => {
    this.setState( {value: e.target.value} );
    console.log( {value: e.target.value} );
  }

  render() {
    return <input name={this.props.name} value={this.state.value} onChange={this.onChangeHandler} />
  }
} 