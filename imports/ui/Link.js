import React, { Component } from 'react';

import PrivateHeader from './PrivateHeader';
import LinkListFilter from './LinkListFilter';
import AddLink from './AddLink';
import LinksList from './LinksList';

export default () => {
  return(
    <div>
      <PrivateHeader title="Your Links" />
      <div className="page-content">
        <LinkListFilter />
        <AddLink />
        <LinksList />
      </div>
    </div>
  );
};
