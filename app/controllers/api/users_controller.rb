class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else 
      p @user.errors.full_messages
      render json: @user.errors.full_messages, status: 404
    end
  end

  def index
    @users = User.includes(:posts)
    render :index
  end
  
  private
  def user_params
    params.require(:user).permit(:username, :email, :password) 
  end
end
