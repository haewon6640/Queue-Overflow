import React from "react";
import { difference } from "../../util/helper";
import { Link } from "react-router-dom";
export default class QuestionShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id != this.props.match.params.id) {
            this.props.fetchPost(this.props.match.params.id);
        }
    }
    render() {
        if (!this.props.question) {
            return null;
        }
        const post = this.props.question;
        let create_ago = difference(new Date(Date.parse(post.created_at)),new Date());
        let update_ago = difference(new Date(Date.parse(post.updated_at)),new Date());
        if (create_ago === 0) {
            create_ago="Today"
        } else if (create_ago === 1) {
            create_ago="Yesterday"
        } else {
            create_ago = `${create_ago} days ago`
        }
        if (update_ago === 0) {
            update_ago="Today"
        } else if (update_ago === 1) {
            update_ago="Yesterday"
        } else {
            update_ago = `${update_ago} days ago`
        }

        return (
            <div className="question-show-container">
                <div className="question-show-top">
                    <h1 className="title">{post.title}</h1>
                    <button className="btn btn-ask">Ask Question</button>
                </div>
                <ul className="stats">
                    <li>Asked <span>{create_ago}</span></li>
                    <li>Modified <span>{update_ago}</span></li>
                </ul>
                <div className="question">
                    <p className="body">{post.body}</p>
                    <div className="tags-container">
                        <ul className="tags">
                            <li>ruby</li>
                            <li>rails</li>
                            <li>react</li>
                        </ul>
                    </div>
                    <div className="more-info">
                        <ul className="share">
                            <li>Share</li>
                            <li><Link to={`/questions/${post.id}/edit`}>Edit</Link></li>
                            <li>Follow</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}