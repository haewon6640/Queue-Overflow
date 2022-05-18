export const toArr = (obj) => (
    Object.keys(obj).map(key=>obj[key])
)
export const sortByNew = (arr) => (
    arr.sort(function(a,b) {
        if (a.created_at < b.created_at) {
            return 1
        } else {
            return -1;
        }
    })
)
export const selectQuestions = ({posts}) => (
    toArr(posts).filter(post => !post.parent_post_id )
)
