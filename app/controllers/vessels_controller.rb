class VesselsController < ApplicationController
  before_action :require_admin , only: [:new, :create, :update, :edit]
  before_action :require_login, only: [:show, :index]

  def show
    @vessel = Vessel.find_by(id: params[:id])
  end

  def new
    @vessel = Vessel.new
  end

  def create
    vessel = Vessel.create(vessel_params)
    redirect_to vessel_path(vessel)
  end

  def edit
    @vessel = Vessel.find_by(id: params[:id])
  end

  def update
    vessel = Vessel.find_by(id: params[:id])
    succeed = vessel.update(vessel_params)

    if succeed
      redirect_to vessel_path(vessel)
    else
      redirect_to vessels_path
    end
  end

  def index
    @vessels = Vessel.all_vessels
  end

private
  def vessel_params
    params.require(:vessel).permit(:name, :active)
  end
end
