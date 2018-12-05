class User < ApplicationRecord
  rolify
	has_many :voyages, foreign_key: :skipper_id
	has_many :vessels, through: :voyages
	has_secure_password

	validates :name, presence: true
	validates :name, uniqueness: true
	validates :name, uniqueness: { case_sensitive: false }

  after_create :assign_default_role

	def balance_login_info
		if email
			name = email
		end
	end

  def assign_default_role
    self.add_role(:crew) if self.roles.blank?
  end

	def self.all_users
		self.order(name: :asc)
	end
	
	def self.all_pwd_users
		self.where(uid: nil).order(name: :asc)
	end
end
