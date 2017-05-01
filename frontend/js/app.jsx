'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import BaseContainer from './components/BaseContainer';
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider><BaseContainer /></MuiThemeProvider>,
  document.getElementById('content')
);
