import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';

import { routes, onAuthChange } from './../imports/routes/routes';

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

Meteor.startup(() => {
  // Meteor.call('greetUser', ['Roy'], (err, res) => {
  // Meteor.call('greetUser', (err, res) => {
  //   console.log('greet User Arguments: ', err, res);
  // });

  Meteor.call('addNumbers', 3, 8, (err, res) => {
    console.log('addNumbers arguments: ', err, res);
  });

  ReactDOM.render(routes, document.getElementById('app'));
});
