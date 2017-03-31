import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Login extends Component {
  render() {
    return(
      <div>
        <h1>Login page</h1>
        <form>
          <input type="text" placeholder="Username"/>
          <input type="text" placeholder="Password" />
          <button>Login</button>
        </form>
        <Link to="/signup">Want an account?</Link>
      </div>
    );
  }
};
