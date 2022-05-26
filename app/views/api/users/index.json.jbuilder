@users.each do |user|
    json.set! user.id do
        json.partial! 'show', user: user
    end
end