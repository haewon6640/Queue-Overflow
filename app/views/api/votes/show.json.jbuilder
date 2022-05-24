json.set! @vote.id do
    json.partial! 'vote', vote: @vote
end