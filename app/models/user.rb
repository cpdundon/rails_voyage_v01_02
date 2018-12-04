class User < ApplicationRecord
  rolify
	has_many :voyages, foreign_key: :skipper_id
	has_many :vessels, through: :voyages
	has_secure_password

	validates :name, presence: true
	validates :name, uniqueness: true
	validates :name, uniqueness: { case_sensitive: false }

  after_create :assign_default_role
	after_create :balance_login_info

	def balance_login_info
		if name
			email = name
		else
			name = email
		end
	end

  def assign_default_role
    self.add_role(:crew) if self.roles.blank?
  end

	def self.all_users
		self.order(name: :asc)
	end
end
