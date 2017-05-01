'use strict';

import React from 'react';
import Comment from './subcomponents/Comment';

class Comments extends React.Component {

  render() {
    const comments = this.props.comments.toArray().map(x =>
      <Comment key={ x.id } comment={ x } />
    );

    return (
      <div>
        { comments }
      </div>
    );
  }
}

export default Comments;
