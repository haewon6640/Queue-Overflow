json.extract! answer, :id,:title,:body, :poster_id, :parent_post_id, :created_at, :updated_at
json.poster_name answer.poster.username
json.comments answer.comment_ids