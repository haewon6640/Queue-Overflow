import React from "react";

export default class UserIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0
        }
    }
    select(num) {
        return (e) => (
            this.setState({selected:num})
        )
    }
    componentDidMount() {
        this.props.fetchUsers();
    }
    render() {
        <div className="user-index-container">
            <div className="user-index-filter">
                <input className="user-search" type="text" placeholder="Filter by user"/>
                <ul className="filters">
                    <li onClick={this.select(0)} className={this.state.selected === 0 ? "selected" : ""}>Reputation</li>
                    <li onClick={this.select(1)} className={this.state.selected === 1 ? "selected" : ""}>New users</li>
                    <li onClick={this.select(2)} className={this.state.selected === 2 ? "selected" : ""}>Voters</li>
                </ul>
            </div>
            <div className="user-list">
                {this.props.users.map(user=> (
                    <div className="user-grid-item">
                        <div>
                            
                        </div>
                        {user.username}
                    </div>
                ))}
            </div>
        </div>
    }
}