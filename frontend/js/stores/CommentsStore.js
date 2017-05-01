'use strict';

import {ReduceStore} from 'flux/utils';
import Immutable from 'immutable';
import Dispatcher from '../dispatcher/Dispatcher';
import CommentConstants from '../utils/constants/CommentConstants';
import CommentModel from '../utils/data/CommentModel';


class CommentsStore extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  getStateByLogId(log_id) {
    const state = this.getState();
    if (state.has(log_id)) {
      return state.get(log_id);
    } else {
      return this.getInitialState();
    }
  }

  reduce(state, action) {
    switch (action.type) {
      case CommentConstants.ADD:
        if (!state.has(action.log.id)) {
          state = state.set(action.log.id, Immutable.OrderedMap());
        }

        state = state.setIn([action.log.id, action.comment.id], new CommentModel({
          id: action.comment.id,
          username: action.comment.username,
          added: action.comment.added,
          comment: action.comment.comment,
        }));

        return state;

      default:
        return state;
    }
  }
}

export default new CommentsStore();
