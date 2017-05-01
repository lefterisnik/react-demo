'use strict';

import CommentConstants from '../utils/constants/CommentConstants';
import Dispatcher from '../dispatcher/Dispatcher';

const CommentActions = {

  add(log, comment) {
    Dispatcher.dispatch({
      type: CommentConstants.ADD,
      comment,
      log,
    });
  },

};

export default CommentActions;
