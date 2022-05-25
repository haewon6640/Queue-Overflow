json.tags do
  json.set! @tags[:questionId] do
    json.array! @tags[:taglist]
  end
end
