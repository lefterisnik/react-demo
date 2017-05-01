'use strict';

import React from 'react';

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
        <h1>React Demo</h1>
        <p>Logs: { this.props.logs.size }</p>
        <p>Comments: { comment_counter }</p>
        <hr/>
      </header>
    );
  }
}

export default Header;
