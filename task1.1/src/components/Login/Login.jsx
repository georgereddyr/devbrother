import React from 'react';
import './Login.css';
import Input from '../Input/Input.jsx';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: this.props.login,
      password: this.props.password
    }
  }

  submit = e => {
    e.preventDefault();
    this.setState({ login: '', password: '' })
    console.log('Login: ' + this.state.login + ' Password: ' + this.state.password);
  }

  render() {
    return (
      <form onSubmit={ this.submit }>
        <div className='labels'>Login: 
          <Input type="email" value={ this.state.login } onChange={e => this.setState({ login: e.target.value })} />
        </div>
        <div className='labels'>Password: 
          <Input type="password" value={ this.state.password } onChange={e => this.setState({ password: e.target.value })} />
        </div>
        <input type="submit" value="Log In" className='button'/>
      </form>
    )
  }
}
