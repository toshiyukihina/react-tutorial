import React from 'react';

export default class CommentForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      author: '',
      text: ''
    };
  }

  handleAuthorChange(e) {
    this.setState({author: e.target.value});
  }

  handleTextChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const author = this.state.author.trim();
    const text = this.state.text.trim();
    if (!author || !text) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    this.setState({author: '', text: ''});
  }

  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="Your name" value={this.state.author} onChange={this.handleAuthorChange.bind(this)} />
        <input type="text" placeholder="Say something..." value={this.state.text} onChange={this.handleTextChange.bind(this)} />
        <input type="submit" value="Post" />
      </form>
    );
  }

}

CommentForm.propTypes = {
  onCommentSubmit: React.PropTypes.func.isRequired
};
