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
export const sortByOld = (arr) => (
    arr.sort(function(a,b) {
        if (a.created_at > b.created_at) {
            return 1
        } else {
            return -1;
        }
    })
)

export const sortByHot = (arr) => (
    arr.sort(function(a,b) {
        if ((a.answer_count+a.votes) < (b.answer_count+b.votes)) {
            return 1
        } else {
            return -1;
        }
    })
)

export const sortByUnanswered = (arr) => {
    let res = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].answer_count === 0) {
            res.push(arr[i]);
        }
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].answer_count != 0) {
            res.push(arr[i]);
        }
    }
    return res;
}
export const selectQuestions = ({posts}) => (
    toArr(posts).filter(post => !post.parent_post_id )
)
