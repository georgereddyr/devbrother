import React from 'react';
import './Login.css';
import Input from '../Input/Input.jsx';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.email,
      password: this.props.password
    }
  }

  submit = e => {
    e.preventDefault();
    this.setState({ email: '', password: '' })
    console.log('email: ' + this.state.email + ' Password: ' + this.state.password);
  }

  render() {
    return (
      <form onSubmit={ this.submit }>
        <div className='labels'>Email: 
          <Input type="email" value={ this.state.email } onChange={e => this.setState({ email: e.target.value })} />
        </div>
        <div className='labels'>Password: 
          <Input type="password" value={ this.state.password } onChange={e => this.setState({ password: e.target.value })} />
        </div>
        <input type="submit" value="Log In" className='button'/>
      </form>
    )
  }
}