import React from "react";
import { withRouter } from "react-router-dom";
import { receivePost } from "../../actions/post_actions";
class AnswerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: `answer_to_${props.postId}`,
            body: "",
            poster_id: props.currUserId,
            parent_post_id: props.postId
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
        this.props.createAnswer(this.state).then(()=>{
            this.setState({
                body: "",
            })
        })
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit} className="answer-form-container">
                <h2>Your Answer</h2>
                <textarea onChange={this.update} id="" cols="30" rows="10" value={this.state.body}></textarea>
                <button className="btn btn-blue btn-answer">Post Your Answer</button>
            </form>
        )
    }
}


export default withRouter(AnswerForm);