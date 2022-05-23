import React from "react";
import { withRouter } from "react-router-dom";
class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
            commenter_id: props.currUserId,
            post_id: props.postId
        }
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    update(e) {
        e.preventDefault();
        this.setState({
            body: e.currentTarget.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.createComment(this.state).then(()=>{
            this.setState({
                body: "",
            })
        })
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit} className="comment-form-container">
                <textarea onChange={this.update} id="" cols="20" rows="5" value={this.state.body}></textarea>
                <button className="btn btn-blue btn-comment">Post Your Comment</button>
            </form>
        )
    }
}


export default CommentForm;