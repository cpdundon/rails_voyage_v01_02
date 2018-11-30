class User < ApplicationRecord
  rolify
	has_many :voyages, foreign_key: :skipper_id
	has_many :vessels, through: :voyages

	has_secure_password

  after_create :assign_default_role

  def assign_default_role
    self.add_role(:crew) if self.roles.blank?
  end
end
