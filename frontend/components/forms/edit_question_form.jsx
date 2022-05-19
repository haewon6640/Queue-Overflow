import React from "react";

export default class EditQuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      poster_id: "",
      parent_post_id: null,
    };
  }
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id).then((res) => {
      if (res.post.poster_id != this.props.currentUserId) {
        alert("You do not have authorization to edit this file.");
        this.props.history.goBack();
      }
    });
  }

  render() {
    return <div>HI</div>;
  }
}
