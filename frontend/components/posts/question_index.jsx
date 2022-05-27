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
            questions: [],
            formType: this.props.formType
        }
        this.select = this.select.bind(this);
    }

    componentDidMount() {
        if ('id' in this.props.match.params) {
            this.props.fetchUsers().then((res)=>
                this.setState({formType: `${res.users[this.props.match.params.id].username}'s Questions`}))
        }
        this.props.fetchUsers();
        this.props.fetchPosts({parent_post_id: null})
            .then(()=>this.setState({questions: this.props.questions}));
    }
    componentDidUpdate(prevProps) {
        if (prevProps.location.search != this.props.location.search) {
            this.props.fetchPosts({parent_post_id: null})
            .then(()=> {
                let search = this.props.location.search;
                search = search.slice(1).split("=");
                let formType = `Questions tagged [${search[1].replace("%20"," ")}]`
                this.setState({
                    questions: this.props.questions,
                    formType
                })
            });
        }
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
            switch (num) {
                case 0:
                    this.setState({questions: sortByNew(this.props.questions)})
                    return;
                case 1:
                    this.setState({questions: sortByOld(this.props.questions)})
                    return;
                case 2:
                    this.setState({questions: sortByHot(this.props.questions)})
                    return;
                case 3:
                    this.setState({questions: sortByUnanswered(this.props.questions)})
                    return;
            }
        })
    }
    render() {
        if (!this.props.questions) {
            return <div className="loading"></div>;
        }
        return (
            <div className="question-index-container">
                <div className="question-index-header">
                    <h1 className="question-index-title">{this.state.formType}</h1>
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