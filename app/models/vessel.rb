class Vessel < ApplicationRecord
	has_many :voyages
	has_many :skippers, through: :voyages, class_name: 'User'

	def self.all_vessels
		self.order(name: :asc)
	end

	def self.all_active_vessels
		self.where(active: true).order(name: :asc)
	end
end
