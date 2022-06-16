export const toArr = (obj) => (
    Object.keys(obj).map(key=>{
        return obj[key];
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

export const sortByUnanswered = (arr) => (
    arr.sort(function(a,b) {
        if (a.answer_count > b.answer_count) {
            return 1
        } else {
            return -1;
        }
    })
)
export const sortByReputation = (arr) => (
    arr.sort(function(a,b) {
        if (a.reputation < b.reputation) {
            return 1
        } else {
            return -1;
        }
    })
)
export const sortByContribution = (arr) => (
    arr.sort(function(a,b) {
        if ((a.answer_count+a.post_count) < (b.answer_count+b.post_count)) {
            return 1
        } else {
            return -1;
        }
    })
)

export const sortTagByPopular = (arr) => (
    arr.sort(function(a,b) {
        if (a.tag_count < b.tag_count) {
            return 1
        } else {
            return -1;
        }
    })
)
export const sortTagByName = (arr) => (
    arr.sort((a,b)=>(a.title).localeCompare(b.title))
)
export const selectQuestions = ({posts}) => (
    toArr(posts).filter(post => !post.parent_post_id )
)
