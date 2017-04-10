import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';
import '../imports/startup/simple-schema-config';

import { routes, onAuthChange } from './../imports/routes/routes';

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
