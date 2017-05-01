'use strict';

import React from 'react';
import LogActions from '../../../actions/LogActions';
import CommentActions from '../../../actions/CommentActions';
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
    LogActions.delete(this.props.log.id);
  }

  handleSubmitForm(e) {
    e.preventDefault();
    CommentActions.add(this.props.log, {
      id: this.state.counter,
      username: 'lefterisnik',
      added: '1 minute before',
      comment: this.refs.comment.value,
    })

    this.refs.comment.value = null;

    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  }

  render() {
    return (
      <div style={{ border: "1px solid #d3d3e3", padding: "10px", marginTop: "20px" }}>
        <h4>{ this.props.log.title }</h4>
        <p>{ this.props.log.entry }</p>
        <small>by { this.props.log.username }</small>
        <hr/>
        <button onClick={ this.handleDeleteButton }>Delete log</button>
        <hr/>
        <h4>Here the logs comments</h4>
        <form onSubmit={ this.handleSubmitForm }>
          Comment: <input type="text" name="title" ref="comment" />
          <input type="submit" value="Add comment" />
        </form>
        <CommentsContainer log={ this.props.log }/>
        <hr />
      </div>
    )
  }

}

export default Log;
