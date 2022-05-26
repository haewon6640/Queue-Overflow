import React from "react"
import QuestionIndexItem from "./question_index_item"
import { Link } from "react-router-dom";
import { sortByNew, sortByOld, sortByHot, sortByUnanswered } from "../../reducers/selectors";
export default class QuestionIndex extends React.Component {

    constructor(props) {
        super(props);
        this.fetchTags = this.fetchTags.bind(this);
        this.state = {
            selected: 0,
            filter: {},
            questions: []
        }
        this.select = this.select.bind(this);
    }

    componentDidMount() {
        console.log("mount");
        this.props.fetchPosts({parent_post_id: null})
            .then(()=>this.setState({questions: this.props.questions}));
    }
    fetchTags(question) {
        let tags = [];
        for (let i = 0; i < question.tags.length; i++) {
            tags.push(this.props.tags[question.tags[i]])
        }
        return tags;
    }
    select(num) {
        // return (e) => this.setState({questions: sortByOld(this.props.questions)})
        return (e) => this.setState({selected: num},()=> {
            if (num === 0) {
                this.setState({questions: sortByNew(this.props.questions)});
            } else if (num === 1) {
                this.setState({questions: sortByOld(this.props.questions)});
            } else if (num === 2) {
                this.setState({questions: sortByHot(this.props.questions)});
                
            } else if (num === 3) {
                this.setState({questions: sortByUnanswered(this.props.questions)});
            }

            // switch (num) {
            //     case 0:
            //         this.setState({questions: sortByNew(this.props.questions)})
            //     case 1:
            //         this.setState({questions: sortByOld(this.props.questions)})
            //     case 2:
            //         this.setState({questions: sortByHot(this.props.questions)})
            //     case 3:
            //         this.setState({questions: sortByUnanswered(this.props.questions)})
            // }
        })
    }
    render() {
        if (!this.props.questions) {
            return <div className="loading"></div>;
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
                    <p className="question-count">{this.state.questions.length} questions</p>
                    <ul className="filters">
                        <li onClick={this.select(0)} className={this.state.selected === 0 ? "selected" : ""}>Newest</li>
                        <li onClick={this.select(1)} className={this.state.selected === 1 ? "selected" : ""}>Oldest</li>
                        <li onClick={this.select(2)} className={this.state.selected === 2 ? "selected" : ""}>Hot</li>
                        <li onClick={this.select(3)} className={this.state.selected === 3 ? "selected" : ""}>Unanswered</li>
                    </ul>
                </div>
                <ul className="questions">
                    {this.state.questions.map(question=>
                        <QuestionIndexItem key={question.id} question={question} tags={this.fetchTags(question)}/>)}
                </ul>
            </div>
        )
    }
}