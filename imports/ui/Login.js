import React, { Component } from 'react';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';

export default class Login extends Component {
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

    Meteor.loginWithPassword({email}, password, (err) => {
      // console.log('Login callback', err);
      let error = err ? 'Unable to login. Check email and password.' : '';
      this.setState({ error });
    });
  }

  render() {
    return(
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1>Short Lnk</h1>
          <p>Wanna try? Login as guest!</p>
        <p>Email: <i>guest@gmail.com</i> - Pwd: <i>Guest123!</i></p>

          {this.state.error ? <p>{this.state.error}</p> : undefined}

          <form onSubmit={this.onSubmit.bind(this)} noValidate className="boxed-view__form">
            <input type="email" ref="email" name="email" placeholder="Email"/>
            <input type="password" ref="password" name="password" placeholder="Password" />
            <button className="button">Login</button>
          </form>

          <Link to="/signup">Want an account?</Link>
        </div>
      </div>
    );
  }
};
