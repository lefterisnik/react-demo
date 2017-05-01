'use strict';

import {ReduceStore} from 'flux/utils';
import Immutable from 'immutable';
import Dispatcher from '../dispatcher/Dispatcher';
import LogConstants from '../utils/constants/LogConstants';
import LogModel from '../utils/data/LogModel';


class LogsStore extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {
    switch (action.type) {
      case LogConstants.ADD:
        return state.set(action.log.id, new LogModel({
          id: action.log.id,
          username: action.log.username,
          added: action.log.added,
          title: action.log.title,
          entry: action.log.entry,
        }));

      case LogConstants.DELETE:
        return state.delete(action.id);

      case LogConstants.EDIT:
        return state.setIn([action.id, 'title'], action.title);

      default:
        return state;
    }
  }
}

export default new LogsStore();
