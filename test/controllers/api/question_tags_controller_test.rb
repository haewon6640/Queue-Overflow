require 'test_helper'

class Api::QuestionTagsControllerTest < ActionDispatch::IntegrationTest
  test 'should get create' do
    get api_question_tags_create_url
    assert_response :success
  end
end
