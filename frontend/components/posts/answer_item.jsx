import React from "react";
import CommentForm from "../forms/comment_form";
import CommentItem from "./comment_item"
export default class AnswerItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show_comment_form: false
        }
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }
    handleCommentSubmit(comment) {
        this.setState({
            show_comment_form: false
        })
        return this.props.createComment(comment);
    }
    render() {
        let comment = this.state.show_comment_form ? 
            <CommentForm createComment={this.handleCommentSubmit}  postId={this.props.answer.id} currUserId={this.props.currUserId}/>
            : <a className="add-comment" onClick={()=>this.setState({show_comment_form: true})}>Add a comment</a>
        
        return (
            <div className="answer-container">
                <p className="body">{this.props.answer.body}</p>
                <div className="more-info">
                    <ul className="share">
                        <li>Share</li>
                        <li>Edit</li>
                        <li>Follow</li>
                    </ul>
                </div>
                <div className="comment-container">
                    {this.props.comments.map(comment=>(
                        <CommentItem key={comment.id} comment={comment}/>
                    ))}
                </div>
                <div className="add-comment-container">
                    {comment}
                </div>
                <div className="bottom-border"></div>
            </div>
        );
    }
}
