class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        if @user.nil?
            render json: ["Invalid Credentials"], status: 401
        else
            login!(@user)
            render 'api/users/show'
        end
    end 
    
    def show
        @user = current_user
    end

    def destroy
        if !logged_in?
            render json: ["You are not logged in."], status: 404
        else
            logout!
            render json: {}, status: 200
        end
    end 
end
