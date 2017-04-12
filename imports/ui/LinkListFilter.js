import React, { Component } from 'react';
import { Session } from 'meteor/session';

export default class LinkListFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHidden: false
    }
  }

  componentDidUpdate() {
    Session.set('showVisible', !this.state.showHidden);
  }

  onChange(e) { this.setState({ showHidden: e.target.checked }); }

  render() {
    let { showHidden } = this.state;
    return (
      <div>
        <label>
          <input
            type="checkbox"
            checked={showHidden}
            onChange={this.onChange.bind(this)}/>
          Show hidden links
        </label>
      </div>
    );
  }
};
