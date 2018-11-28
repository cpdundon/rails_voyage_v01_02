class AddActiveColumnDeleteRoleMask < ActiveRecord::Migration[5.2]
  def change
		add_column :users, :active, :boolean, default: true
		remove_column :users, :role_mask
  end
end
