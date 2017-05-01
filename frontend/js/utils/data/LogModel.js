'use strict';

import Immutable from 'immutable';

const LogModel = Immutable.Record({
  id: '',
  username: '',
  added: '',
  title: '',
  entry: '',
});

export default LogModel;
