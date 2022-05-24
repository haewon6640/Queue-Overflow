export const createComment = (comment) => (
    $.ajax({
        method: 'POST',
        url: 'api/comments',
        data: {comment}
    })
)

export const updateComment = (comment) => (
    $.ajax({
        method: 'PATCH',
        url: `api/comments/${comment.id}`,
        data: {comment}
    })
)