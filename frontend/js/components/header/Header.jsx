'use strict';

import React from 'react';
import AppBar from 'material-ui/AppBar';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

class Header extends React.Component {

  render() {
    let comment_counter = 0;
    let comments = this.props.comments;
    this.props.logs.toArray().map(x => {
      if (comments.has(x.id)) {
        comment_counter += comments.get(x.id).size
      }
    })


    return (
      <header>
        <AppBar
          title="React Demo"
        >
          <Badge
            badgeContent={ this.props.logs.size }
            secondary={ true }
          >
            <NotificationsIcon />
          </Badge>
          <Badge
            badgeContent={ comment_counter }
            secondary={ true }
          >
            <NotificationsIcon />
          </Badge>
        </AppBar>
      </header>
    );
  }
}

export default Header;
