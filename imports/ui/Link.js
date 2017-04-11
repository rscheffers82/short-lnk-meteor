import React, { Component } from 'react';
import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';
import LinkListFilter from './LinkListFilter';

export default () => {
  return(
    <div>
      <PrivateHeader title="Your Links" />
      <LinkListFilter />
      <LinksList />
      <AddLink />
    </div>
  );
};
