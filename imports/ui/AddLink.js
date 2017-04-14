import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import Modal from 'react-modal';

export default class AddLink extends Component {
  constructor(props){
    super(props);
    this.state = {
      url: '',
      isOpen: false,
      error: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleModelClose = this.handleModelClose.bind(this);

  }
  onSubmit(e) {
    e.preventDefault();
    const { url } = this.state;

    Meteor.call('links.insert', url, (err, res) => {
      if (!err) this.handleModelClose();
      else this.setState({ error: err.reason });
    });
  }

  onChange(e) {
    let url = e.target.value;
    this.setState({ url });
  }

  handleModelClose() {
    this.setState({
      url: '',
      isOpen: false,
      error: ''
    });
  }

  render() {
    let { url, isOpen, error } = this.state;
    return (
      <div>
        <button className="button" onClick={() => this.setState({ isOpen: true }) }>
          + Add Link
        </button>
        <Modal
          isOpen={isOpen}
          contentLabel="Add link"
          onAfterOpen={() => this.refs.url.focus()}
          onRequestClose={this.handleModelClose}
          className="boxed-view__box"
          overlayClassName="boxed-view boxed-view--modal">
          <h1>Add Link</h1>
          {error ? <p>{error}</p> : undefined}
          <form onSubmit={this.onSubmit} className="boxed-view__form">
            <input
              type="text"
              placeholder="URL"
              ref="url"
              value={url}
              onChange={this.onChange}/>
            <button className="button">Add Link</button>
            <button type="button" className="button button--secondary" onClick={this.handleModelClose}>Cancel</button>
          </form>
        </Modal>
      </div>
    );
  }
};
