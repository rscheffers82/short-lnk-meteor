import React, { Component } from 'react';
import { Session } from 'meteor/session';
import { Tracker } from 'meteor/tracker';

export default class LinkListFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showVisible: true
    }
  }

  componentDidMount() {
    this.showVisibleTracker = Tracker.autorun(() => {
      this.setState({ showVisible: Session.get('showVisible') });
    });
  }

  componentWillUnmount() {
    this.showVisibleTracker.stop();
  }

  render() {
    let { showVisible } = this.state;
    return (
      <div>
        <label className="checkbox">
          <input
            className="checkbox__box"
            type="checkbox"
            checked={!showVisible}
            onChange={() => { Session.set('showVisible', !showVisible); }}/>
          Show hidden links
        </label>
      </div>
    );
  }
};
