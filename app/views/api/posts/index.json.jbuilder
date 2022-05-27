json.posts do 
    @posts.each do |post|
        json.set! post.id do
            json.partial! 'post', post: post
        end
    end
end


json.tags do
    @tags.each do |tag| 
        json.set! tag.id do
            json.extract! tag,:title
        end
    end
end