export const fetchPosts = data => (
    $.ajax({
        method: 'GET',
        url: 'api/posts',
        data
    })
)

export const fetchPost = id => (
    $.ajax({
        method: 'GET',
        url: `api/posts/${id}`
    })
)

export const createPost = formPost => (
    $.ajax({
        method: 'POST',
        url: 'api/posts',
        data: formPost,
        contentType:false,
        processData: false
    })
)
export const updatePost = (post) => (
    $.ajax({
        method: 'PATCH',
        url: `api/posts/${post.id}`,
        data: post,
        contentType:false,
        processData: false
    })
)
export const deletePost = (id) => (
    $.ajax({
        method: 'DELETE',
        url: `api/posts/${id}`
    })
)