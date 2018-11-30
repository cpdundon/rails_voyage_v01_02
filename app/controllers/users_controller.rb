class UsersController < ApplicationController
  def show
    @user = User.find_by(id: params[:id])
    @roles = @user.roles.all

    render 'show.html.erb'
  end

  def new
    @user = User.new
  end

  def create
    user = User.create(user_params)
    redirect_to user_path(user)
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
			redirect_to users_path
		end
	end

	def index
		@users = User.all
	end

private
  def user_params
    params.require(:user).permit(:name, :password, :active, role_ids: [])
  end
end
