class Api::PostsController < ApplicationController
    def index
      # params contain the filter
      if tag_params[:tag_title]
        @posts = Post.left_joins(:tags).where({"tags.title": tag_params[:tag_title]}.merge(filter_params.as_json)).includes(:poster, :answers, :votes, :tags).distinct
      else
        @posts = Post.where(filter_params.as_json).includes(:poster, :answers, :votes, :tags)
      end
      @tags = Tag.all
      render :index
    end
  
    def show
      @post = Post.find_by(id: params[:id])
      @answers = Post.where(parent_post_id: params[:id]).includes(:comments)
      if @post
        render :show
      else
        render json: ['No such post exists'], status: 404
      end
    end
  
    def createTags(question_id)
      tag_list = []
      tags = post_params[:taglist]
      tags.each do |tag_title|
        tag = Tag.find_by(title: tag_title)
        tag ||= Tag.new(title: tag_title)
        if tag.save
          question_tag = QuestionTag.where(tag_id: tag.id, question_id: question_id).limit(1)
          if question_tag.length == 0
            question_tag = QuestionTag.new(tag_id: tag.id, question_id: question_id)
            render json: question_tag.errors.full_messages, status: 422 unless question_tag.save!
          end
          tag_list.push(tag)
        else
          render json: tag.errors.full_messages, status: 422
        end
      end
    end
  
    def create
      parameters = post_params.reject do |param|
        param == 'taglist'
      end
      @post = Post.new(parameters)
      @answers = []
      if @post.save
        if @post.parent_post_id.nil?
          createTags(@post.id)
          render :show
        else
          render :create_answer
        end
      else
        render json: @post.errors.full_messages, status: 422
      end
    end
  
    def destroy
      @post = Post.find_by(id: params[:id])
      if @post && @post.destroy
        render :show
      else
        render json: ['Could not delete post successfully.'], status: 422
      end
    end
  
    def update
      @post = Post.find_by(id: params[:id])
      @answers = Post.where(parent_post_id: params[:id]).includes(:comments)
      if @post
        if @post.update(post_params)
          render :show
        else
          render json: @post.errors.full_messages, status: 422
        end
      else
        render json: ['Question Not Found'], status: 404
      end
    end
  
    private
  
    def filter_params
      newParams = params.permit(:parent_post_id, :poster_id)
      newParams.each do |k, v|
        newParams[k] = nil if v == ''
      end
    end

    def tag_params
      params.permit(:tag_title)
    end
  
    def post_params
      params.require(:post).permit(:title, :body, :poster_id, :parent_post_id, taglist: [])
    end
  end
  