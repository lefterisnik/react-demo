import React from 'react';
import {Container} from 'flux/utils';
import CommentsStore from '../../stores/CommentsStore';
import Comments from './Comments';

class CommentContainer extends React.Component {
  static getStores() {
    return [CommentsStore];
  }

  static calculateState(prevState, props) {
    return {
      comments: CommentsStore.getStateByLogId(props.log.id),
    };
  }

  render() {
    return (
      <Comments comments={ this.state.comments } />
    );
  }
}

export default Container.create(CommentContainer, {withProps: true});
