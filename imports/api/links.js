import { Meteor } from 'meteor/meteor';
import { mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import shortid from 'shortid';

export const Links = new Mongo.Collection('links');

// this file is run on both server and client. In order to only run parts on the server use the below.
if (Meteor.isServer) {
  Meteor.publish('links', function() {
    const userId = this.userId;
    return Links.find({ userId });
  });
};

Meteor.methods({
  'links.insert'(url){
    if(!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    new SimpleSchema({
      url: {
        type: String,
        label: 'Your link',
        regEx: SimpleSchema.RegEx.Url
      }
    }).validate({ url });

    Links.insert({
      _id: shortid.generate(),
      url,
      userId: this.userId,
      visible: true
    });
  },

  'links.setVisibility'(_id, visible) {
    const userId = this.userId;
    if(!userId) {
      throw new Meteor.Error('not-authorized');
    }

    new SimpleSchema({
      _id: {
        type: String,
        min: 1
      },
      visible: {
        type: Boolean
      }
    }).validate({ _id, visible });

    Links.update({ _id, userId }, { $set: { visible } });
  }
});
