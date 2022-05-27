import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import { timeSince } from "../../util/helper";
import { sortByNew, sortTagByPopular, sortTagByName} from "../../reducers/selectors";
export default class TagIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0,
            tags: [],
            searchedTags: []
        }
        this.search = this.search.bind(this);
    }
    select(num) {
        return (e) => this.setState({selected: num},()=> {
            switch (num) {
                case 0:
                    this.setState({searchedTags: sortTagByPopular(this.state.searchedTags)})
                    return;
                case 1:
                    this.setState({searchedTags: sortTagByName(this.state.searchedTags)})
                    return;
                case 2:
                    this.setState({searchedTags: sortByNew(this.state.searchedTags)})
                    return;
            }
        })
    }
    search(e) {
        e.preventDefault();
        let searchedItems = [];
        for (let i = 0; i < this.state.tags.length; i++) {
            if (this.state.tags[i].title.toLowerCase().includes(e.currentTarget.value.toLowerCase())) {
                searchedItems.push(this.state.tags[i])
            }
        }
        this.setState({
            searchedTags: searchedItems
        })
    }
    componentDidMount() {
        this.props.fetchTags()
            .then(()=>{
                this.setState({tags: this.props.tags, searchedTags: this.props.tags})
            });
    }
    render() {
        return(
        <div className="user-index-container">
            <h1 className="user-index-title">Tags</h1>
            <div className="user-index-filter">
                <div className="user-search">
                    <svg className="user-search-icon" width="18" height="18" viewBox="0 0 18 18"><path d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z"></path></svg>
                    <input onChange={this.search} type="text" placeholder="Filter by tag name"/>
                </div>
                <ul className="filters">
                    <li onClick={this.select(0)} className={this.state.selected === 0 ? "selected" : ""}>Popular</li>
                    <li onClick={this.select(1)} className={this.state.selected === 1 ? "selected" : ""}>Name</li>
                    <li onClick={this.select(2)} className={this.state.selected === 2 ? "selected" : ""}>New</li>
                </ul>
            </div>
            <div className="user-list">
                {this.state.searchedTags.map(tag=> (
                    <div key={tag.id} className="user-grid-item">
                        <Link className="tag-name" to={`/questions/search?tag_title=${tag.title}`}>
                            {tag.title}
                        </Link>
                        <ul className="tag-list">
                            <li>
                                <p>{tag.tag_count} questions</p>
                                <p className="created">Created {timeSince(new Date(Date.parse(tag.created_at)))} ago</p>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
        );
    }
}