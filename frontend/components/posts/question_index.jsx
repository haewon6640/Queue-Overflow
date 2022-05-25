import React from "react"
import QuestionIndexItem from "./question_index_item"
import { Link } from "react-router-dom";
export default class QuestionIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPosts({parent_post_id: null});
    }

    render() {
        if (!this.props.questions) {
            return null;
        }
        return (
            <div className="question-index-container">
                <div className="question-index-header">
                    <h1 className="question-index-title">All Questions</h1>
                    <button className="btn btn-blue btn-ask">
                       <Link to="/questions/new">Ask Question</Link>
                    </button>
                </div>
                <div className="question-index-filter">
                    <p className="question-count">{this.props.questions.length} questions</p>
                    <ul className="filters">
                        <li className="selected">Newest</li>
                        <li>Active</li>
                        <li>Unanswered</li>
                    </ul>
                </div>
                <ul className="questions">
                    {this.props.questions.map(question=>
                        <QuestionIndexItem key={question.id} question={question}/>)}
                </ul>
            </div>
        )
    }
}