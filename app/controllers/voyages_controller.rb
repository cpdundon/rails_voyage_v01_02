class VoyagesController < ApplicationController
  before_action :require_voyage, only: [:new, :create, :update, :edit, :show, :destroy]
  before_action :require_login, only: [:index]

  def show
    @voyage = Voyage.find_by(id: params[:id])
  end

  def new
		@vessel = Vessel.find_by(id: params[:vessel_id])
		@voyage = helpers.hot_user.voyages.new
  end

  def create
    voyage = Voyage.new(voyage_params)
		voyage.skipper = helpers.hot_user
		voyage.save

    redirect_to voyage_path(voyage)
  end

  def edit
    @voyage = Voyage.find_by(id: params[:id])
  end

  def update
    voyage = Voyage.find_by(id: params[:id])
    succeed = voyage.update(voyage_params)

    if succeed
      redirect_to voyage_path(voyage)
    else
      redirect_to voyages_path
    end
  end

  def index
		redirect_to root_path if !logged_in?

		if params[:vessel_id]
			vessel = Vessel.find_by(id: params[:vessel_id])
			@voyages = Voyage.vessel_voyages(vessel)
		else
			@voyages = Voyage.skipper_voyages(hot_user)
		end
  end

	def destroy
		Voyage.find_by(id: params[:id]).delete
		redirect_to voyages_path
	end

private
  def voyage_params
    params.require(:voyage).permit(:voyage_date, :crew, :damage_report, :vessel_id)
  end

  def require_voyage
		voyage = Voyage.find_by(id: params[:id])
		
		unless (voyage.skipper_id == hot_user.id if voyage) || admin?
      flash[:error] = "You are not an admin.  You can only view your own voyage details."
      redirect_to voyages_path
    end
  end
end
