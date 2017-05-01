'use strict';

import React from 'react';
import {Card, CardTitle, CardActions, CardHeader, CardText} from 'material-ui/Card';


class Comment extends React.Component {

  render() {
    return (
      <Card>
        <CardTitle
          title={ this.props.comment.comment }
          subtitle={ this.props.comment.username }
        />
      </Card>
    )
  }

}

export default Comment;
