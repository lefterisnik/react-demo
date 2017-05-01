'use strict';

import React from 'react';
import Immutable from 'immutable';
import LogActions from '../../actions/LogActions';
import Log from './subcomponents/Log';

class Logs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {counter: 0};

    // This binding is necessary to make `this` work in the callback
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleSubmitForm(e) {
    e.preventDefault();
    LogActions.add({
      id: this.state.counter,
      username: 'lefterisnik',
      added: '1 minute before',
      title: this.refs.title.value,
      entry: this.refs.entry.value,
    });

    this.refs.title.value = null;
    this.refs.entry.value = null;

    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  }

  render() {
    const logs = this.props.logs.toArray().map(x =>
      <Log key={ x.id } log={ x } />
    );

    return (
      <section>
        <h2>Welcome</h2>
        <h4>Here the logs</h4>
        <hr />
        <form onSubmit={ this.handleSubmitForm }>
          Title: <input type="text" name="title" ref="title" />
          Entry: <input type="text" name="entry" ref="entry" />
          <input type="submit" value="Add log" />
        </form>
        <hr />
        { logs }
      </section>
    );
  }
}

export default Logs;
