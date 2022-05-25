class Api::TagsController < ApplicationController
  def create
    tag_list = []
    tag_params[:taglist].each do |tag_title|
      tag = Tag.find_by(title: tag_title)
      tag = tag ? tag : Tag.new(title: tag_title)
      if tag.save!
        question_tag = QuestionTag.where(tag_id: tag.id, question_id: tag_params[:questionId]).limit(1)
        if !question_tag 
          question_tag = QuestionTag.new(tag_id: tag.id, question_id: tag_params[:questionId])
          if !(question_tag.save!)
            render json: question_tag.errors.full_messages, status: 422
          end
        end
        tag_list.push(tag)
      else 
        render json: tag.errors.full_messages, status: 422
      end
    end
    @tags = {questionId: tag_params[:questionId], taglist: tag_list}
    render :show
  end

  def show
    @tag = Tag.find_by(id: params[:id])
    if @tag
      render :show
    else
      render json: ["Couldn't find the associated tag."], status: 404
    end
  end

  private
  def tag_params
    params.require(:tags).permit(:questionId, taglist:[])
  end
end
