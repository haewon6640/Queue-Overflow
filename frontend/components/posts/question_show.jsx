import React from "react";
import { difference } from "../../util/helper";
import { Link } from "react-router-dom";
import AnswerForm from "../forms/answer_form";
import AnswerItem from "./answer_item";
import CommentForm from "../forms/comment_form";
import CommentItem from "./comment_item";
import VoteItem from "./vote_item";
export default class QuestionShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show_comment_form: false,
            show_share_modal: false
        };
        this.fetchComments = this.fetchComments.bind(this);
        this.createComment = this.createComment.bind(this);
        // this.fetchMyVote = this.fetchMyVote.bind(this);
        this.handleShare = this.handleShare.bind(this);
    }

    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id != this.props.match.params.id) {
            this.props.fetchPost(this.props.match.params.id);
        }
    }
    componentWillUnmount() {
        this.props.clearComments();
        this.props.clearAnswers();
    }

    parseDates(created_at, updated_at) {
        let create_ago = difference(
            new Date(Date.parse(created_at)),
            new Date()
        );
        let update_ago = difference(
            new Date(Date.parse(updated_at)),
            new Date()
        );
        if (create_ago === 0) {
            create_ago = "Today";
        } else if (create_ago === 1) {
            create_ago = "Yesterday";
        } else {
            create_ago = `${create_ago} days ago`;
        }
        if (update_ago === 0) {
            update_ago = "Today";
        } else if (update_ago === 1) {
            update_ago = "Yesterday";
        } else {
            update_ago = `${update_ago} days ago`;
        }
        return { create_ago, update_ago };
    }
    fetchComments(post) {
        let comments = [];
        post.comments.forEach((commentId) => {
            comments.push(this.props.comments[commentId]);
        });
        return comments;
    }

    createComment(comment) {
        this.setState({
            show_comment_form: false,
        });
        return this.props.createComment(comment);
    }

    fetchMyVote(post) {
        for (var i = 0; i < this.props.votes.length; i++) {
            if (
                this.props.votes[i].post_id === post.id &&
                this.props.votes[i].voter_id === this.props.currUserId
            ) {
                return this.props.votes[i];
            }
        }
        return "none";
    }
    fetchTags(question) {
        let tags = [];
        for (let i = 0; i < question.tags.length; i++) {
            tags.push(this.props.tags[question.tags[i]])
        }
        return tags;
    }
    handleShare(e) {
        this.setState({show_share_modal:!this.state.show_share_modal})
    }
    render() {
        if (!this.props.question) {
            return null;
        }
        const post = this.props.question;
        const { create_ago, update_ago } = this.parseDates(
            post.created_at,
            post.updated_at
        );
        let comment = this.state.show_comment_form ? (
            <CommentForm
                createComment={this.createComment}
                postId={post.id}
                currUserId={this.props.currUserId}
            />
        ) : (
            <a className="add-comment" onClick={() => this.setState({ show_comment_form: true })}>
                Add a comment
            </a>
        );
        return (
            <div className="question-show-container">
                <div className="question-container">
                    <div className="question-show-top">
                        <h1 className="title">{post.title}</h1>
                        <Link to="/questions/new">
                            <button className="btn btn-blue">
                                Ask Question
                            </button>
                        </Link>
                    </div>
                    <div className="asker">
                        By <Link to={`/users/${post.poster_id}`}><span className="asker-highlight"> {post.poster_name}</span></Link>
                    </div>
                    <ul className="stats">
                        <li>
                            Asked <span>{create_ago}</span>
                        </li>
                        <li>
                            Modified <span>{update_ago}</span>
                        </li>
                    </ul>
                    <div className="question-vote-container">
                        <VoteItem
                            myVote={this.fetchMyVote(post)}
                            post={post}
                            createVote={this.props.createVote}
                            deleteVote={this.props.deleteVote}
                            updateVote={this.props.updateVote}
                            currUserId={this.props.currUserId}
                        />
                        <div className="question">
                            <p className="body">{post.body}</p>
                            <div className="tags-container">
                                <ul className="tags">
                                    {this.fetchTags(post).map((tag,idx)=><Link to={`/questions/search?tag_title=${tag.title}`} style={{cursor:"pointer"}} key={idx}><li>{tag.title}</li></Link>)}
                                </ul>
                            </div>
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
                                    { this.props.currUserId === post.poster_id &&
                                            <li>
                                                <Link to={`/questions/${post.id}/edit`}>
                                                    Edit
                                                </Link>
                                            </li>
                                    }
                                    { this.props.currUserId === post.poster_id &&
                                            <li onClick={()=>this.props.deletePost(post.id).then(()=> this.props.history.push("/questions"))}>
                                                Delete
                                            </li>
                                    }
                                </ul>
                                <div className="exact-date">
                                    <div>asked on {new Date(Date.parse(post.created_at)).toISOString().slice(0,10)}</div>
                                    <Link to={`/users/${post.poster_id}`} className="asker-highlight">{post.poster_name}</Link>
                                </div>
                            </div>
                            <div className="comment-container">
                                {this.fetchComments(post).map((comment) => {
                                    if (comment) {
                                        return (
                                            <CommentItem key={comment.id} comment={comment} />
                                        );
                                    }
                                })}
                            </div>
                            <div className="add-comment-container">{comment}</div>
                        </div>
                    </div>
                </div>
                <div className="answer-count">{post.answer_count} Answers</div>
                <div className="bottom-border"></div>
                {this.props.answers.map((answer) => (
                    <AnswerItem
                        key={answer.id}
                        createComment={this.props.createComment}
                        answer={answer}
                        comments={this.fetchComments(answer)}
                        currUserId={this.props.currUserId}
                        myVote={this.fetchMyVote(answer)}
                        createVote={this.props.createVote}
                        deleteVote={this.props.deleteVote}
                        updateVote={this.props.updateVote}
                    />
                ))}
                <AnswerForm
                    createAnswer={this.props.createAnswer}
                    postId={post.id}
                    currUserId={this.props.currUserId}
                />
            </div>
        );
    }
}
