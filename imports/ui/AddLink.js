import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import Modal from 'react-modal';

export default class AddLink extends Component {
  constructor(props){
    super(props);
    this.state = {
      url: '',
      isOpen: false
    };
  }
  onSubmit(e) {
    e.preventDefault();
    const { url } = this.state;
    if (url) {
      Meteor.call('links.insert', url, (err, res) => {
        if (!err) this.setState({ url: '', isOpen: false });
      });
    }
  }

  onChange(e) {
    let url = e.target.value;
    this.setState({ url });
  }

  render() {
    let { url, isOpen } = this.state;
    return (
      <div>
        <button onClick={() => this.setState({ isOpen: true }) }>
          + Add Link
        </button>
        <Modal isOpen={isOpen} contentLabel="Add link">
          <p>Add Link</p>
          <form onSubmit={this.onSubmit.bind(this)}>
            <input
              type="text"
              placeholder="URL"
              value={url}
              onChange={this.onChange.bind(this)}/>
            <button>Add Link</button>
          </form>
          <button onClick={() => this.setState({ url: '', isOpen: false })}>Cancel</button>
        </Modal>
      </div>
    );
  }
};
