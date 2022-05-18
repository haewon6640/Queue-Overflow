json.extract! post, :id,:title,:body, :poster_id, :parent_post_id, :created_at, :updated_at
json.poster_name post.poster.username