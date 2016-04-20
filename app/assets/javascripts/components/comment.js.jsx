import React from 'react';
import marked from 'marked';

export default class Comment extends React.Component {

  constructor(props) {
    super(props);
  }

  rawMarkup() {
    const html = marked(this.props.children.toString(), { sanitize: true });
    return { __html: html };
  }

  render() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">{this.props.author}</h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()}></span>
      </div>
    );
  }
  
}

Comment.propTypes = {
  author: React.PropTypes.string.isRequired
};
