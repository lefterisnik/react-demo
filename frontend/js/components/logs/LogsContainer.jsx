import React from 'react';
import {Container} from 'flux/utils';

import LogsStore from '../../stores/LogsStore';
import Logs from './Logs';


class LogsContainer extends React.Component {
  static getStores() {
    return [LogsStore];
  }

  static calculateState(prevState) {
    return {
      logs: LogsStore.getState(),
    };
  }

  render() {
    return (
      <Logs logs={ this.state.logs } />
    );
  }
}

export default Container.create(LogsContainer);
