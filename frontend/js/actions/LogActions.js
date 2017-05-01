'use strict';

import LogConstants from '../utils/constants/LogConstants';
import Dispatcher from '../dispatcher/Dispatcher';

const LogActions = {

  add(log) {
    Dispatcher.dispatch({
      type: LogConstants.ADD,
      log,
    });
  },

  delete(id) {
    Dispatcher.dispatch({
      type: LogConstants.DELETE,
      id,
    });
  },

  edit(title) {
    Dispatcher.dispatch({
      type: LogConstants.EDIT,
      id,
      title,
    });
  },

};

export default LogActions;
