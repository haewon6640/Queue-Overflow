import React from "react";

export default class CreateQuestionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            poster_id: "",
            parent_post_id: null,
            tag: "",
            show_input: true,
            taglist: [],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTagUpdate = this.handleTagUpdate.bind(this);
        this.filterState = this.filterState.bind(this);
        this.deleteTag = this.deleteTag.bind(this);
    }

    componentDidMount() {
        this.setState({
            poster_id: this.props.currentUserId,
        });
    }

    update(field) {
        return (e) => {
            if (e.target.value[e.target.value.length - 1] != ",") {
                this.setState({
                    [field]: e.target.value,
                });
            }
        };
    }
    filterState() {
        const asArray = Object.entries(this.state);
        const filtered = asArray.filter(([key, value]) => key != "tag" && key != "show_input");
        return Object.fromEntries(filtered);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props
            .action(this.filterState())
            .then((res) =>
                this.props.history.push(`/questions/view/${res.post.id}`)
            );
    }
    handleTagUpdate(e) {
        if (e.key === "Enter" || e.key === ",") {
            this.setState({
                taglist: this.state.taglist.concat([this.state.tag]),
                tag: "",
                show_input: false
            });
        }
    }
    deleteTag(idx) {
        this.setState({
            taglist: this.state.taglist.slice(0,idx).concat(this.state.taglist.slice(idx+1))
        },()=> {
            if (this.state.taglist.length === 0) {
                this.setState({show_input:true})
            }
        })
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
                                <div className="tag-container edit">
                                    {/* <input
                                        onChange={this.update("tag")}
                                        onKeyDown={this.handleTagUpdate}
                                        className={`tag-input ${this.state.show_input}`}
                                        name="tags"
                                        type="text"
                                        value={this.state.tag}
                                        placeholder="e.g.(ajax java reactjs)"
                                    /> */}
                                    <div className="tag-input-container">
                                        <span className="tags">
                                            {this.state.taglist.map((tag, idx) => (
                                                <span key={idx} className="tag">
                                                    <p>{tag}</p>
                                                    <a className="delete-tag" onClick={()=>this.deleteTag(idx)}>
                                                        <i className="fa-solid fa-x delete-icon"></i>
                                                    </a>
                                                </span>
                                            ))}
                                        </span>
                                        {
                                            <input
                                            onChange={this.update("tag")}
                                            onKeyDown={this.handleTagUpdate}
                                            className="tag-editor"
                                            name="tags"
                                            type="text"
                                            value={this.state.tag}
                                            placeholder={this.state.show_input ? "e.g.(ajax java reactjs)" : ""}
                                        />}
                                    </div>
                                </div>
                                <button className="btn btn-blue">
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
