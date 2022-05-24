import React from 'react';

export default class VoteItem extends React.Component {
    constructor(props) {
        super(props);

        let [id,vote] = (props.myVote === "none") ? ["","none"] : [props.myVote.id,props.myVote.vote];
        this.state = {
            vote,
            voter_id: props.currUserId,
            post_id: props.post.id,
            id
        }
    }

    componentDidMount() {
        let [id,vote] = (this.props.myVote === "none") ? ["","none"] : [this.props.myVote.id,this.props.myVote.vote];
        this.setState({
            vote,
            voter_id: this.props.currUserId,
            post_id: this.props.post.id,
            id
        })
        
    }
    update(bool) {
        return (e) => {
            if (!Boolean(this.props.currUserId)) {
                alert("You have to be logged in to vote.");
            } else if (this.state.vote === "none") {
                this.setState({
                    vote: bool
                }, ()=>
                    this.props.createVote(this.state)
                        .then((res)=>{
                            this.setState({id: res.vote[Object.keys(res.vote)[0]].id})
                        })
                )
            } else if (this.state.vote != bool){
                this.setState({
                    vote: bool
                },()=> this.props.updateVote(this.state)
                );
            } else {
                this.setState({
                    vote: "none"
                }, ()=>
                    this.props.deleteVote(this.state.id)
                )
            }
            
        }
    }

    render() {
        return (
            <div className="vote">
                <button onClick={this.update(true)} className={`upvote ${this.state.vote === true ? "voted" : ""}`}>
                    <svg aria-hidden="true" width="36" height="36" viewBox="0 0 36 36" className="vote-icon">
                        <path d="M2 25h32L18 9 2 25Z"></path>
                    </svg>
                </button>
                <p>{this.props.post.score}</p>
                <button onClick={this.update(false)} className={`downvote ${this.state.vote === false ? "voted" : ""}`}>
                    <svg aria-hidden="true" width="36" height="36" viewBox="0 0 36 36" className="vote-icon">
                        <path d="M2 11h32L18 27 2 11Z"></path>
                    </svg>
                </button>
            </div>
        );
    }
}