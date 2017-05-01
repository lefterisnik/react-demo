'use strict';

import React from 'react';
import Immutable from 'immutable';
import LogActions from '../../actions/LogActions';
import {Card, CardTitle, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
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
      title: this.refs.title.getValue(),
      entry: this.refs.entry.getValue(),
    });

    this.refs.title.input.value = null;
    this.refs.entry.input.value = null;

    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  }

  render() {
    const logs = this.props.logs.toArray().map(x =>
      <Log key={ x.id } log={ x } />
    );

    const textFieldStyle = {
      "marginLeft": "10px"
    }

    const raisedButtonStyle = {
      "marginLeft": "10px"
    }

    return (
      <section>
        <Card initiallyExpanded={ true }>
          <CardTitle
            title="Welcome"
            subtitle="Here the logs"
            actAsExpander={ true }
            showExpandableButton={ true }
          />
          <CardActions>
            <form onSubmit={ this.handleSubmitForm }>
              <TextField
                hintText="Title"
                floatingLabelText="Title"
                ref="title"
                style={ textFieldStyle }
              />
              <TextField
                hintText="Entry"
                floatingLabelText="Entry"
                ref="entry"
                style={ textFieldStyle }
              />
              <RaisedButton
                label="Add log"
                type="submit"
                style={ raisedButtonStyle }
              />
            </form>
          </CardActions>
          <CardText expandable={ true }>
            { logs }
          </CardText>
        </Card>
      </section>
    );
  }
}

export default Logs;
