import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

export default class AddLink extends Component {
  onSubmit(e) {
    e.preventDefault();
    const url = this.refs.url.value.trim();
    if (url) {
      Meteor.call('links.insert', url, (err, res) => {
      });
      this.refs.url.value = '';
    }
  }

  render() {
    return (
      <div>
        <p>Add Link</p>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="url" placeholder="URL" />
          <button>Add Link</button>
        </form>
      </div>
    );
  }
};
