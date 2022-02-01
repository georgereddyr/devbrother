import React from 'react';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: this.props.login,
      password: this.props.password
    }
  }

  Submit = (e) => {
    e.preventDefault();
    this.setState({ login: '', password: '' })
    console.log('Login: ' + this.state.login + ' Password: ' + this.state.password);
  }

  render() {
    return (
      <form onSubmit={ this.Submit }>
        <div className='labels'>Login: 
          <input type="email" value={ this.state.login } onChange={e => this.setState({ login: e.target.value })} />
        </div>
        <div className='labels'>Password: 
          <input type="password" value={ this.state.password } onChange={e => this.setState({ password: e.target.value })} />
        </div>
        <input type="submit" value="Log In" className='button'/>
      </form>
    )
  }
}
