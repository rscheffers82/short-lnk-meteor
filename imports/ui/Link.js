import React, { Component } from 'react';
import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';

export default class Link extends Component {
  render() {
    return(
      <div>
        <PrivateHeader title="Your Links" />
        <LinksList />
        <AddLink />
      </div>
    );
  }
};
