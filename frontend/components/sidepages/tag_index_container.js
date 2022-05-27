import { connect } from "react-redux";
import {fetchTags} from "../../actions/tag_actions";
import TagIndex from "./tag_index";
import { toArr, sortTagByPopular } from "../../reducers/selectors";
const mSTP = ({entities: {tags}}) => ({
    tags: sortTagByPopular(toArr(tags))
})

const mDTP = dispatch => ({
    fetchTags: ()=>dispatch(fetchTags())
})

export default connect(mSTP, mDTP)(TagIndex)