import React from "react";
import CommentForm from "../forms/comment_form";
import CommentItem from "./comment_item";
import VoteItem from "./vote_item";
export default class AnswerItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show_comment_form: false,
            show_share_modal: false
        };
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
        this.handleShare = this.handleShare.bind(this);
    }
    handleCommentSubmit(comment) {
        this.setState({
            show_comment_form: false,
        });
        return this.props.createComment(comment);
    }
    handleShare(e) {
        this.setState({show_share_modal:!this.state.show_share_modal})
    }
    render() {
        let comment = this.state.show_comment_form ? (
            <CommentForm
                createComment={this.handleCommentSubmit}
                postId={this.props.answer.id}
                currUserId={this.props.currUserId}
            />
        ) : (
            <a
                className="add-comment"
                onClick={() => this.setState({ show_comment_form: true })}
            >
                Add a comment
            </a>
        );
        return (
            <div className="answer-vote-container">
                <VoteItem
                    myVote={this.props.myVote}
                    post={this.props.answer}
                    createVote={this.props.createVote}
                    deleteVote={this.props.deleteVote}
                    updateVote={this.props.updateVote}
                    currUserId={this.props.currUserId}
                />
                <div className="answer-container">
                    <p className="body">{this.props.answer.body}</p>
                    <div className="more-info">
                        <ul className="share">
                            <li onClick={this.handleShare}>Share</li>
                            {this.state.show_share_modal &&
                                <div className="share-modal">
                                    <div>
                                        <p>Share a link to this question.</p>
                                        <p onClick={this.handleShare}>X</p>
                                    </div>
                                    <input type="text" className="share-link" value={window.location.href} />
                                </div>}
                            <li>Edit</li>
                        </ul>
                    </div>
                    <div className="comment-container">
                        {this.props.comments.map((comment) => (
                            <CommentItem key={comment.id} comment={comment} />
                        ))}
                    </div>
                    <div className="add-comment-container">{comment}</div>
                    <div className="bottom-border"></div>
                </div>
            </div>
        );
    }
}
