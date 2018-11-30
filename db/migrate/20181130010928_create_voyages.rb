class CreateVoyages < ActiveRecord::Migration[5.2]
  def change
    create_table :voyages do |t|
      t.integer :skipper_id
      t.integer :vessel_id
      t.text :crew
      t.text :damage_report

      t.timestamps
    end
  end
end
