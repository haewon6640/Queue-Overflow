class Api::VotesController < ApplicationController
  def create
    @vote = Vote.new(vote_params)
    if @vote.save!
      render :show
    else
      render json: @vote.errors.full_messages, status: 422
    end
  end

  def destroy
    @vote = Vote.find_by(id: params[:id])
    if @vote && @vote.destroy
      render :show
    else
      render json: ["Something went wrong! :("],status: 422
    end
  end

  def update
    @vote = Vote.find_by(id: params[:id])
    if @vote 
      if @vote.update(vote_params)
        render :show
      else
        render json: @vote.errors.full_messages, status: 422
      end
    else
      render json: ["Something went wrong! :("],status: 404
    end
  end
  private
  def vote_params
    params.require(:vote).permit(:voter_id, :post_id, :vote)
  end
end
