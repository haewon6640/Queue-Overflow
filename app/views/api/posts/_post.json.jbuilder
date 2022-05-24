json.extract! post, :id,:title,:body, :poster_id, :parent_post_id, :created_at, :updated_at
json.poster_name post.poster.username
json.answer_count post.answer_count
json.comments post.comment_ids
json.votes post.votes.count
json.score post.score