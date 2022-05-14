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
        logout!
        render json: ["logged out"], status: 200
    end 
end
