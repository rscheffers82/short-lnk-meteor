import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import Clipboard from 'clipboard';

export default class LinkListItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      justCopied: false,
    };
  }
  componentDidMount() {
    this.clipboard = new Clipboard(this.refs.copy);

    this.clipboard.on('success', () => {
      this.setState({ justCopied: true });
      setTimeout( () => this.setState({ justCopied: false }), 1000);
    }).on('error', () => {
      alert('Unable to copy. Please manually copy the link.')
    })
  };

  componentWillUnmount() {
    this.clipboard.destroy();
  };

  render() {
    const { _id, shortUrl, url, visible } = this.props;
    const { justCopied } = this.state;
    return (
      <div style={{border: 1 + 'px solid #ccc', margin: '10px 0'}}>
        <p>url: {url}</p>
        <p>shortUrl: {shortUrl}</p>
        <p>{visible.toString()}</p>
        <button ref="copy" data-clipboard-text={shortUrl}>
          {justCopied ? 'Copied' : 'Copy'}
        </button>
        <button
          onClick={() => { Meteor.call( 'links.setVisibility', _id, !visible ) }}
        >
          {visible ? 'Hide' : 'Unhide'}</button>
      </div>
    );
  }
};

LinkListItem.propTypes = {
  _id: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired,
  userId: React.PropTypes.string.isRequired,
  shortUrl: React.PropTypes.string.isRequired,
  visible: React.PropTypes.bool.isRequired
  // visits: React.PropTypes.number.isRequired
};

{/* <p key={link._id}>- {link.url}</p> */}
