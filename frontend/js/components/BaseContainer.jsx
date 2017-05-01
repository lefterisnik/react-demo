import React from 'react';
import LogsContainer from './logs/LogsContainer';
import HeaderContainer from './header/HeaderContainer';


class BaseContainer extends React.Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <LogsContainer />
      </div>
    );
  }
}

export default BaseContainer;
