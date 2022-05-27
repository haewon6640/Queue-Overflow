json.extract! user, :id, :username,:email
json.reputation user.reputation
json.post_count user.post_count
json.answer_count user.answer_count
json.created_at user.created_at