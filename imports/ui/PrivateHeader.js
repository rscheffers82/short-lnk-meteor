import React, { Component } from 'react';
import { Accounts  } from 'meteor/accounts-base';

const PrivateHeader = (props) => {
  return (
    <div className="header">
      <div className="header__content">
        <h1 className="header__title">{props.title}</h1>
        <a className="button button--link-text" onClick={() => Accounts.logout()}>Logout</a>
      </div>
    </div>
  );
};

PrivateHeader.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default PrivateHeader;
