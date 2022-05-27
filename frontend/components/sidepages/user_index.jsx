import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import {sortByReputation, sortByNew, sortByContribution} from "../../reducers/selectors";
import { timeSince } from "../../util/helper";
export default class UserIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0,
            users: [],
            searchedUsers: []
        }
        this.search = this.search.bind(this);
    }
    select(num) {
        return (e) => this.setState({selected: num},()=> {
            switch (num) {
                case 0:
                    this.setState({searchedUsers: sortByReputation(this.state.searchedUsers)})
                    return;
                case 1:
                    this.setState({searchedUsers: sortByNew(this.state.searchedUsers)})
                    return;
                case 2:
                    this.setState({searchedUsers: sortByContribution(this.state.searchedUsers)})
                    return;
            }
        })
    }
    componentDidMount() {
        this.props.fetchUsers()
            .then(()=>{
                this.setState({users: this.props.users,searchedUsers: this.props.users})
            });
    }
    search(e) {
        e.preventDefault();
        let searchedItems = [];
        for (let i = 0; i < this.state.users.length; i++) {
            if (this.state.users[i].username.toLowerCase().includes(e.currentTarget.value.toLowerCase())) {
                searchedItems.push(this.state.users[i])
            }
        }
        this.setState({
            searchedUsers: searchedItems
        })
    }
    render() {
        return(
        <div className="user-index-container">
            <h1 className="user-index-title">Users</h1>
            <div className="user-index-filter">
                <div className="user-search">
                    <svg className="user-search-icon" width="18" height="18" viewBox="0 0 18 18"><path d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z"></path></svg>
                    <input onChange={this.search} type="text" placeholder="Filter by user"/>
                </div>
                <ul className="filters">
                    <li onClick={this.select(0)} className={this.state.selected === 0 ? "selected" : ""}>Reputation</li>
                    <li onClick={this.select(1)} className={this.state.selected === 1 ? "selected" : ""}>New users</li>
                    <li onClick={this.select(2)} className={this.state.selected === 2 ? "selected" : ""}>Answers</li>
                </ul>
            </div>
            <div className="user-list">
                {this.state.searchedUsers.map(user=> (
                    <div key={user.id} className="user-grid-item">
                        <Link className="user-name" to={`/users/${user.id}`}>
                            <p>{user.username}</p>
                        </Link>
                        <ul>
                            <li>Reputation: {user.reputation}</li>
                            <li>{user.post_count} Posts</li>
                            <li>
                                <p>{user.answer_count} Answers</p>
                                <p className="created">Created {timeSince(new Date(Date.parse(user.created_at)))} ago</p>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
        );
    }
}