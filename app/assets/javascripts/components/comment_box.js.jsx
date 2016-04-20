import React from 'react';
import request from 'superagent';
import CommentList from './comment_list';
import CommentForm from './comment_form';

export default class CommentBox extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  loadCommentsFromServer() {
    request.get(this.props.url)
           .end((err, res) => {
             if (err) {
               throw err;
             }
             this.setState({data: res.body});
           });
  }

  handleCommentSubmit(comment) {
    const oldComments = this.state.data;
    comment.id = Date.now();
    const newComments = oldComments.concat([comment]);
    this.setState({data: newComments});
    
    request.post(this.props.url)
           .send(comment)
           .end((err, res) => {
             if (err) {
               this.setState({data: oldComments});               
               throw err
             }
             this.setState({data: res.body});
           });
  }

  componentDidMount() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer.bind(this), this.props.pollInterval || this.props.defaultPollInterval);
  }

  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data}/>
        <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />
      </div>
    );
  }

}

CommentBox.propTypes = {
  url: React.PropTypes.string.isRequired,
  pollInterval: React.PropTypes.number
};

CommentBox.defaultProps = {
  defaultPollInterval: 1000
};
