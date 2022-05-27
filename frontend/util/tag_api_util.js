export const createTags = (tags, questionId) => (
  $.ajax({
    method: "POST",
    url: "api/tags",
    data: { tags: { taglist: tags, questionId } },
  })
)

export const fetchTags = () => (
  $.ajax({
    method: "GET",
    url: "api/tags"
  })
)
  