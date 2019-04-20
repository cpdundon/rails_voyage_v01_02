class UsersController < ApplicationController
	before_action :require_admin, except: [:new_outside, :create]

  def show
    @user = User.find_by(id: params[:id])
    @roles = @user.roles.all

    render 'show.html.erb'
  end

	def new_outside
		@user = User.new
		@outside = true
	
		render 'new.html.erb'
	end

  def new
    @user = User.new
		@outside = false
  end

  def create
    user = User.new(user_params)

		if user.valid?
			user.save
			redirect_to user_path(user)
		else
			flash[:error] = "You must use a unique user name."
			redirect_to new_user_path 
		end
  end

	def edit
		@user = User.find_by(id: params[:id])
	end

	def update
		user = User.find_by(id: params[:id])
		
		succeed = user.update(user_params)
		
		if succeed
			redirect_to user_path(user)
		else
			flash[:error] = "You must use a unique user name."	
			redirect_to edit_user_path(user)
		end
	end

	def index
		@users = User.all_users
	end

private
  def user_params
    params.require(:user).permit(:name, :password, :active, role_ids: [])
  end
end
