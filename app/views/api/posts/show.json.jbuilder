
json.post do
    json.partial! 'post', post: @post
    json.answers @post.answer_ids
end

json.answers do
    @post.answers.each do |answer|
        json.set! answer.id do 
            json.partial! 'post', post: answer
        end
    end
end

