import React from "react";

export default class CreateQuestionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            poster_id: "",
            parent_post_id: null,
            taglist: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.setState({
            poster_id: this.props.currentUserId
        })
    }

    update(field) {
        return (e) => {
            this.setState({
                [field]: e.target.value
            })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state).then((res)=>
            this.props.history.push(`/questions/${res.post.id}`));
    }

    render() {
        return (
            <div className="create-form-container">
                <div className="create-form">
                    <div className="header">
                        <div className="headline">Ask a public question</div>
                    </div>
                    <div className="create-flex">
                        <div className="form-container">
                            <form onSubmit={this.handleSubmit}>
                                <label className="label" htmlFor="title">
                                    <h1 className="main-label">Title</h1>
                                    <p className="lower-label">Be specific and imagine you’re asking a question to another person</p>
                                </label>
                                <input placeholder="e.g. Is there an R function for finding the index of an element in a vector?" className="input" name="title" type="text" value={this.state.title} onChange={this.update('title')}/>
                                <label className="label" htmlFor="body">
                                    <h1 className="main-label">Body</h1>
                                    <p className="lower-label">Include all the information someone would need to answer your question</p>
                                </label>
                                <textarea className="input" name="body" cols="30" rows="10" onChange={this.update('body')} value={this.state.body}></textarea>
                                <label className="label" htmlFor="tags">
                                    <h1 className="main-label">Tags</h1>
                                    <p className="lower-label">Add up to 5 tags to describe what your question is about</p>
                                </label>
                                <input className="input" name="tags" type="text" placeholder="e.g.(ajax java reactjs)" />
                                <button className="btn btn-blue">Post your question</button>
                            </form>
                        </div>
                        <aside className="steps-container">
                            <div className="steps-title">Step 1: Draft your question</div>
                            <div className="steps">
                                <div className="steps-info">
                                    <p>The community is here to help you with specific coding, algorithm, or language problems.</p>
                                    <br/>
                                    <p>Avoid asking opinion-based questions.</p>
                                </div>
                                <ul className="steps-instruction">
                                    <li><span className="number">1.</span> Summarize the problem.</li>
                                    <li><span className="number">2.</span> Describe what you've tried.</li>
                                    <li><span className="number">3.</span> Show some code.</li>
                                </ul>
                            </div>

                        </aside>
                    </div>
                </div>
            </div>
        )
    }
}