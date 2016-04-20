import React from 'react';
import Comment from './comment'

export default class CommentList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const commentNodes = this.props.data.map((comment) => {
      return <Comment key={comment.id} author={comment.author}>{comment.text}</Comment>
    });
    
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }

}
