class VoyagesController < ApplicationController
  def show
    @voyage = Voyage.find_by(id: params[:id])
  end

  def new
		@voyage = helpers.hot_user.voyages.new
		#@voyage.skipper = helpers.hot_user
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
    @voyages = Voyage.all
  end

	def destroy
		Voyage.find_by(id: params[:id]).delete
		redirect_to voyages_path
	end

private
  def voyage_params
    params.require(:voyage).permit(:voyage_date, :crew, :damage_report, :vessel_id)
  end
end
