import React, { Component } from 'react';

export default class LinkListItem extends Component {
  render() {
    const { shortUrl, url } = this.props
    return (
      <div>
        <p>
          url: {url}
        </p>
        <p>
          shortUrl: {shortUrl}
        </p>
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
