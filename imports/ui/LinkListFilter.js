import React from 'react';
import { Session } from 'meteor/session';

export default () => {
  const flip = (e) => {
    Session.set('showVisible', !e.target.checked);
  }
  return (
    <div>
      <label>
        <input type="checkbox" onChange={flip}/>
        Show hidden links
      </label>
    </div>
  );
};
