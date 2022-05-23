json.extract! comment, :id, :body, :commenter_id, :post_id, :created_at, :updated_at
json.commenter_name comment.commenter.username
if comment.post.parent_post_id.nil?
    json.comment_type "question"
else
    json.comment_type "answer"
end