import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Signup extends Component {
  render() {
    return(
      <div>
        <h1>Signup page</h1>
        <form>
          <input type="text" placeholder="Username"/>
          <input type="text" placeholder="Password" />
          <button>Signup</button>
        </form>
        <Link to="/">Already have an account?</Link>
      </div>
    );
  }
};
