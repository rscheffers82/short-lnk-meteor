import { Meteor } from 'meteor/meteor';
import { mongo } from 'meteor/mongo';

export const Links = new Mongo.Collection('links');
// this file is run on both server and client. In order to only run parts on the server use the below.
if (Meteor.isServer) {
  Meteor.publish('links', function() {
    const userId = this.userId;
    return Links.find({ userId });
  });
};

Meteor.methods({
  greetUser(name) {
    console.log('greetUser is running');

    if (!name) {
      throw new Meteor.Error('invalid-arguments', 'Name is required');
    }

    return `Hello ${name}!`;
  },
  addNumbers(a, b) {
    if( typeof a !== 'number' || typeof b !== 'number' ) {
      throw new Meteor.Error('invalid-arguments', 'Both arguments need to be numeric');
    }

    return a + b;
  }



});
