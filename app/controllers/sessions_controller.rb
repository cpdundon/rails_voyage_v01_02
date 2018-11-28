class SessionsController < ApplicationController
	def signin
		helpers.sign_out
		render "signin"
	end

	def create
		user = User.find_by(name: params[:user][:name])
		if user && user.authenticate(params[:user][:password])
			session[:user_id] = user.id
			redirect_to user_path(user)
		else
			helpers.sign_out
			redirect_to signin_path
		end
	end

	def destroy
		helpers.sign_out
		redirect_to '/'
	end

private
	def user_params
		params.require(:user).permit(:name, :password)
	end
end
