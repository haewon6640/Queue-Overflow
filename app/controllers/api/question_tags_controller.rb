class Api::QuestionTagsController < ApplicationController
  def create
    @tag = Tag.new(tag_params)
    if @tag.save
      render :show
    else 
      render json: @tag.errors.full_messages, status: 422
    end
  end

  private
  def q_tag_params
    params.require(:question_tag).permit(:question_id, :tag_id)
  end
end
