import React from "react";
import { Link } from "react-router-dom";
export default class QuestionIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: ""
        }
    }
    difference(date1, date2) {  
        const date1utc = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
        const date2utc = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
        let day = 1000*60*60*24;
        return(date2utc - date1utc)/day
      }
      
    componentDidMount() {

        this.setState({
            time: this.difference(new Date(Date.parse(this.props.question.created_at)),new Date())
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
                    <li>0 answers</li>
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