import React from "react";
import { Link } from "react-router-dom";
import {difference} from "../../util/helper"
export default class QuestionIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: ""
        }
    }
      
    componentDidMount() {

        this.setState({
            time: difference(new Date(Date.parse(this.props.question.created_at)),new Date())
        })
    }
    render() {
        const question = this.props.question;
        const body = question.body.length <= 200 ?
            question.body : question.body.slice(0,200) + "..."
        return (
            <li className="question-index-item">
                <ul className="stats">
                    <li>0 votes</li>
                    <li>{question.answer_count} answers</li>
                    <li>3 views</li>
                </ul>
                <h3 className="question-index-item-title">
                    <Link to={`/questions/${question.id}`}>{question.title}</Link>   
                </h3>
                <p className="question-index-item-body">{body}</p>
                <div className="question-index-item-info">
                    <ul className="tags">
                        <li>python</li>
                        <li>matplotlib</li>
                        <li>plot</li>
                    </ul>
                    <div className="question-index-item-info-right">
                        <Link className="asker" to={`/users/${question.poster_id}`}>{question.poster_name}</Link>
                        <time>asked {this.state.time} day ago</time>
                    </div>
                </div>
            </li>
        )
    }
}