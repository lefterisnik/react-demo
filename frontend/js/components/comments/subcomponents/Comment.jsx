'use strict';

import React from 'react';

class Comment extends React.Component {

  render() {
    return (
      <div>
        <p>{ this.props.comment.comment }</p>
        <small>by { this.props.comment.username }</small>
      </div>
    )
  }

}

export default Comment;
