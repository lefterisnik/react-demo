'use strict';

import Immutable from 'immutable';

const CommentModel = Immutable.Record({
  id: '',
  username: '',
  added: '',
  comment: '',
});

export default CommentModel;
