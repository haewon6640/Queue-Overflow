json.extract! vote, :id, :voter_id, :post_id, :vote

if vote.post.parent_post_id.nil?
    json.post_type "question"
else
    json.post_type "answer"
end