module ApplicationHelper
	def sign_out
    session.delete :user_id
  end
	
	def require_login
    unless logged_in?
      flash[:error] = "You must be logged in to access this section"
      redirect_to root_path
    end
  end

	def require_admin
    unless admin?
      flash[:error] = "You must have admin access to view this section"
      redirect_to root_path
    end
  end
  
	def logged_in?
    !!session[:user_id]
  end

  def hot_user
    User.find_by(id: session[:user_id]) if logged_in?
  end

  def admin?
    hot_user.roles.any? {|role| role.name == :admin} if hot_user
  end

end
