class Vessel < ApplicationRecord
	has_many :voyages
	has_many :skippers, through: :voyages, class_name: 'User'
end
