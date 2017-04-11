import React, { Component } from 'react';
import Clipboard from 'clipboard';

export default class LinkListItem extends Component {
  componentDidMount() {
    this.clipboard = new Clipboard(this.refs.copy);

    this.clipboard.on('success', () => {
      alert('it works!');
    }).on('error', () => {
      alert('Unable to copy. Please manually copy the link.')
    })
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  render() {
    const { shortUrl, url } = this.props
    return (
      <div>
        <p>url: {url}</p>
        <p>shortUrl: {shortUrl}</p>
        <button ref="copy" data-clipboard-text={shortUrl}>Copy</button>
      </div>
    );
  }
};

LinkListItem.propTypes = {
  _id: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired,
  userId: React.PropTypes.string.isRequired,
  shortUrl: React.PropTypes.string.isRequired,
  // visits: React.PropTypes.number.isRequired
};

{/* <p key={link._id}>- {link.url}</p> */}
