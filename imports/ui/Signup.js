import React, { Component } from 'react';
import { Link } from 'react-router';
import { Accounts } from 'meteor/accounts-base';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }

  onSubmit(e) {
    e.preventDefault();
    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    Accounts.createUser({email , password}, (err) => {
      // console.log('Singup callback', err);
      let error = err ? err.reason : '';
      this.setState({ error });
    });

  }

  render() {
    return(
      <div>
        <h1>Join Short Lnk</h1>
        {this.state.error ? <p>{this.state.error}</p> : undefined}
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="email" ref="email" name="email" placeholder="Email"/>
          <input type="text" ref="password" name="password" placeholder="Password" />
          <button>Create Account</button>
        </form>
        <Link to="/">Already have an account?</Link>
      </div>
    );
  }
};
