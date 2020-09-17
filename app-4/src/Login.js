import React, { Component } from 'react'

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    }
  }

  render() {
    return(
      <div>
        <input onChange= {(e) => this.handleUsername(e.target.value) } type='text'/>
        <input onChange= {(e) => this.handlePassword(e.target.value) } type='text' />
        <button onClick={this.handleLogin}> Log In </button>
      </div>
    )
  }

  handleUsername(name){
    this.setState({ username: name })
  }

  handlePassword(pass){
    this.setState({ password: pass})
  }

  handleLogin = () => {
    alert(`Username: ${this.state.username} Password: ${this.state.password}`)
  }

}

export default Login