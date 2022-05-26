import React from "react";

export default class EditQuestionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            poster_id: "",
            parent_post_id: null,
            taglist:[]
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    update(field) {
        return (e) => {
            this.setState({
                [field]: e.target.value,
            });
        };
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props
            .action(this.state)
            .then((res) =>
                this.props.history.push(`/questions/view/${res.post.id}`)
            );
    }

    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id).then((res) => {
            if (res.post.poster_id != this.props.currentUserId) {
                alert("You do not have authorization to edit this post.");
                this.props.history.goBack();
            }
            this.setState({
                title: res.post.title,
                body: res.post.body,
                poster_id: res.post.poster_id,
                id: res.post.id,
                parent_post_id: res.parent_post_id,
                taglist: this.fetchTags(res.post)
            });
        });
    }
    fetchTags(question) {
        let tags = [];
        for (let i = 0; i < question.tags.length; i++) {
            tags.push(this.props.tags[question.tags[i]]);
        }
        return tags;
    }
    render() {
        return (
            <div className="create-form-container">
                <div className="create-form">
                    <div className="header">
                        <div className="headline">Edit question</div>
                    </div>
                    <div className="create-flex">
                        <div className="form-container">
                            <form onSubmit={this.handleSubmit}>
                                <label className="label" htmlFor="title">
                                    <h1 className="main-label">Title</h1>
                                    <p className="lower-label">
                                        Be specific and imagine you’re asking a
                                        question to another person
                                    </p>
                                </label>
                                <input
                                    placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                                    className="input"
                                    name="title"
                                    type="text"
                                    value={this.state.title}
                                    onChange={this.update("title")}
                                />
                                <label className="label" htmlFor="body">
                                    <h1 className="main-label">Body</h1>
                                    <p className="lower-label">
                                        Include all the information someone
                                        would need to answer your question
                                    </p>
                                </label>
                                <textarea
                                    className="input"
                                    name="body"
                                    cols="30"
                                    rows="10"
                                    onChange={this.update("body")}
                                    value={this.state.body}
                                ></textarea>
                                <label className="label" htmlFor="tags">
                                    <h1 className="main-label">Tags</h1>
                                    <p className="lower-label">
                                        Add up to 5 tags to describe what your
                                        question is about
                                    </p>
                                </label>
                                <div className="tag-container">
                                    <div className="tag-input-container edit">
                                        <span className="tags">
                                            {this.state.taglist.map((tag, idx) => (
                                                <span key={idx} className="tag">
                                                    <p>{tag.title}</p>
                                                </span>
                                            ))}
                                        </span>
                                    </div>
                                </div>
                                <button className="btn btn-blue btn-submit btn-edit">
                                    Post your question
                                </button>
                            </form>
                        </div>
                        <aside className="steps-container">
                            <div className="steps-title">
                                Draft your question
                            </div>
                            <div className="steps">
                                <div className="steps-info">
                                    <p>
                                        The community is here to help you with
                                        specific coding, algorithm, or language
                                        problems.
                                    </p>
                                    <br />
                                    <p>Avoid asking opinion-based questions.</p>
                                </div>
                                <ul className="steps-instruction">
                                    <li>
                                        <span className="number">1.</span>{" "}
                                        Summarize the problem.
                                    </li>
                                    <li>
                                        <span className="number">2.</span>{" "}
                                        Describe what you've tried.
                                    </li>
                                    <li>
                                        <span className="number">3.</span> Show
                                        some code.
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        );
    }
}
