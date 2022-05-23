
json.post do
    json.partial! 'post', post: @post
    json.answers @post.answer_ids
end

json.answers do
    @answers.each do |answer|
        json.set! answer.id do 
            json.partial! 'answer', answer: answer
        end
    end
end

json.comments do
    @post.comments.each do |comment|
        json.set! comment.id do
            json.partial! '/api/comments/comment', comment: comment
        end
    end
    @answers.each do |answer|
        answer.comments.each do |comment|
            json.set! comment.id do 
                json.partial! '/api/comments/comment', comment: comment
            end
        end
    end
end





