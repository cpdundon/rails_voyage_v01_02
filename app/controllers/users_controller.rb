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

private
  def user_params
    params.require(:user).permit(:name, :password, :active, role_ids: [])
  end
end
