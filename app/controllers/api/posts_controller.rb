class Api::PostsController < ApplicationController
    def index 
        # params contain the filter
        @posts = Post.select("posts.*").where(filter_params.as_json).includes(:poster)
        render :index
    end

    def show
        @post = Post.find_by(id: params[:id])
        if @post
            render :show
        else
            render json: ["No such post exists"], status: 404
        end
    end

    def create 
        @post = Post.new(post_params);
        if @post.save
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end 
    end

    def destroy 
        @post = Post.find_by(id: params[:id])
        if @post && @post.destroy
            render :show
        else
            render json: ["Could not delete post successfully."],status: 422
        end
    end

    def update
        @post = Post.find_by(id: params[:id])
        unless @post
            render json: ["Question Not Found"], status: 404
        else
            if @post.update(post_params)
                render :show
            else
                render json: @post.errors.full_messages, status: 422
            end
        end
    end

    private

    def filter_params
        newParams = params.permit(:parent_post_id, :poster_id)
        newParams.each do |k,v|
            if v == ""
                newParams[k] = nil
            end
        end
    end

    def post_params
        params.require(:post).permit(:title, :body, :poster_id, :parent_post_id)

    end

end
