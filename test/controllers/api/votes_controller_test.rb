require 'test_helper'

class Api::VotesControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_votes_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_votes_destroy_url
    assert_response :success
  end

end
