import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';
import FlipMove from 'react-flip-move';
import { Links } from '../api/links';
import LinksListItem from './LinkListItem';

export default class LinksList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: []
    };
  }

  componentDidMount() {
    this.linksTracker = Tracker.autorun(() => {
      Meteor.subscribe('links');
      const visible = Session.get('showVisible');
      const links = Links.find({ visible }).fetch();
      this.setState({ links });
    });
  }

  componentWillUnmount() {
    this.linksTracker.stop();
  }

  renderLinksListItems() {
    const { links } = this.state;

    if (links.length === 0) return (
      <div className="item">
        <p className="item__status-message">No Links Found</p>
      </div>
    );

    return links.map((link) => {
      const shortUrl = Meteor.absoluteUrl(link._id);
      return <LinksListItem key={link._id} shortUrl={shortUrl} {...link} />;
    });
  }

  render() {
    return (
      <div>
        <FlipMove maintainContainerHeight={true}>
            {this.renderLinksListItems()}
        </FlipMove>
      </div>
    );
  }
};
