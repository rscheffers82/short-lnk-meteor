import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

export default class AddLink extends Component {
  constructor(props){
    super(props);
    this.state = {
      url: ''
    };
  }
  onSubmit(e) {
    e.preventDefault();
    const { url } = this.state;
    if (url) {
      Meteor.call('links.insert', url, (err, res) => {
        if (!err) this.setState({ url: '' });
      });
    }
  }

  onChange(e) {
    let url = e.target.value;
    this.setState({ url });
  }

  render() {
    let { url } = this.state;
    return (
      <div>
        <p>Add Link</p>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input
            type="text"
            placeholder="URL"
            value={url}
            onChange={this.onChange.bind(this)}/>
          <button>Add Link</button>
        </form>
      </div>
    );
  }
};
