import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

SimpleSchema.defineValidationErrorTransform((e) => {
  return new Meteor.Error(400, e.message);
});

// the above replaces the need for using a try catch block and transform a normal error into a meteor error, see below  // try {
    // try{
    // new SimpleSchema({
    //   url: {
    //     type: String,
    //     label: 'Your link',
    //     regEx: SimpleSchema.RegEx.Url
    //   }
    // }).validate({ url });
    // } catch(e) {
    //   throw new Meteor.Error(400, e.message);
    // }
