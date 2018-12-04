class SessionsController < ApplicationController
	def signin
		sign_out
		render "signin"
	end

	def create
		
		if user_params[:name]
			regular_login
		else
			facebook_login
		end

	end

	def destroy
		sign_out
		redirect_to '/'
	end

	def oauth
		sign_out	
		render 'facebook.html.erb'
	end

private
	def user_params
		params.require(:user).permit(:name, :password)
	end

  def auth
    request.env['omniauth.auth']
  end

	def regular_login
		user = User.find_by(name: params[:user][:name])
		if user && user.authenticate(params[:user][:password]) && user.active 
			session[:user_id] = user.id
			
			if admin?
				redirect_to user_path(user)
			else
				redirect_to voyages_path
			end
		else
			sign_out
      flash[:error] = "Either your password is incorrect or your username has been deactivated."
			redirect_to signin_path
		end
	end

	def facebook_login
		@user = User.find_or_create_by(uid: auth['uid']) do |u|
      u.name = auth['info']['name']
      u.email = auth['info']['email']
    end

		flash[:error] = "Your account is not active - please see an administrator."
		redirect_to signin_path
				
    session[:user_id] = @user.id

		if admin?
			redirect_to user_path(user)
		else
			redirect_to voyages_path
		end
  end
end
