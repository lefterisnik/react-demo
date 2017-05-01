'use strict';

import React from 'react';
import LogActions from '../../../actions/LogActions';
import CommentActions from '../../../actions/CommentActions';
import {Card, CardTitle, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import CommentsContainer from '../../comments/CommentsContainer';

class Log extends React.Component {

  constructor(props) {
    super(props);
    this.state = {counter: 0};

    // This binding is necessary to make `this` work in the callback
    this.handleDeleteButton = this.handleDeleteButton.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleDeleteButton(e) {
    e.preventDefault();
    LogActions.delete(this.props.log.get('id'));
  }

  handleSubmitForm(e) {
    e.preventDefault()
    CommentActions.add(this.props.log, {
      id: this.state.counter,
      username: 'lefterisnik',
      added: '1 minute before',
      comment: this.refs.comment.getValue(),
    })

    this.refs.comment.input.value = null;

    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  }

  render() {
    const textFieldStyle = {
      "marginLeft": "10px"
    }

    const raisedButtonStyle = {
      "marginLeft": "10px"
    }

    return (
      <Card initiallyExpanded={ true }>
        <CardTitle
          title={ this.props.log.title }
          subtitle={ this.props.log.entry }
          actAsExpander={ true }
          showExpandableButton={ true }
        />
        <Divider />
        <CardActions>
          <RaisedButton
            label="Delete log"
            onClick={ this.handleDeleteButton }
          />
          <br/>
          <form onSubmit={ this.handleSubmitForm }>
            <TextField
              hintText="Comment"
              floatingLabelText="Comment"
              ref="comment"
              style={ textFieldStyle }
            />
            <RaisedButton
              label="Add comment"
              type="submit"
              style={ raisedButtonStyle }
            />
          </form>
        </CardActions>
        <CardText expandable={ true }>
          <CommentsContainer log={ this.props.log }/>
        </CardText>
      </Card>
    )
  }

}

export default Log;
