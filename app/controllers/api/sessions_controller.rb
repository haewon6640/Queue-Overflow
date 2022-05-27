class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        if @user.nil?
            render json: ["The email is not a valid email address."], status: 401
        else
            login!(@user)
            render 'api/users/show'
        end
    end 
    
    def show
        @user = current_user
    end

    def destroy
        if current_user
            logout!
            render json: {}, status: 200
        else
            render json: ["You are not logged in."], status: 404
        end
    end 
end
