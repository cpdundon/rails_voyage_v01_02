class AddVoyageDateToVoyages < ActiveRecord::Migration[5.2]
  def change
		add_column :voyages, :voyage_date, :date

  end
end
