import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';

import '../imports/api/users';
import { Links } from '../imports/api/links';
import '../imports/startup/simple-schema-config';

Meteor.startup(() => {
  WebApp.connectHandlers.use((req, res, next) => {
    // console.log('from custom middleware');
    // console.log(req.url, req.method, req.headers, req.query);
    const _id = req.url.slice(1);
    const link = Links.findOne({ _id });

    if (link) {
      res.statusCode = 302;
      res.setHeader('Location', link.url);
      res.end();
    } else {
      next();
    }
  });
});




// test code in startup function, but not applicable anymore for the running of the app.
  // code to run on server at startup

  // -- SimpleSchema example
  // const employeeSchema = new SimpleSchema({
  //   name: {
  //     type: String,
  //     min: 1,
  //     max: 200,
  //   },
  //   hourlyWage: {
  //     type: Number,
  //     min: 0,
  //   },
  //   email: {
  //     type: String,
  //     regEx: SimpleSchema.RegEx.Email
  //   }
  // });
  //
  // employeeSchema.validate({
  //   name: 'stuff',
  //   hourlyWage: 1,
  //   email: 'roy@gmail.com'
  // });
