import React from 'react';
import {Container} from 'flux/utils';

import CommentsStore from '../../stores/CommentsStore';
import LogsStore from '../../stores/LogsStore';
import Header from './Header';


class HeaderContainer extends React.Component {
  static getStores() {
    return [
      LogsStore,
      CommentsStore,
    ];
  }

  static calculateState(prevState) {
    return {
      logs: LogsStore.getState(),
      comments: CommentsStore.getState()
    };
  }

  render() {
    return (
      <Header logs={ this.state.logs } comments={ this.state.comments } />
    );
  }
}

export default Container.create(HeaderContainer);
