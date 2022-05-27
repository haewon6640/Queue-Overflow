import React from "react";
class AnswerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            title: `answer_to_${props.postId}`,
            body: props.body,
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
        this.props.action(this.state).then(()=>{
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


export default AnswerForm;