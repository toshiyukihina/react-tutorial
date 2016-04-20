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

CommentList.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    author: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired
  }))
};
