class Voyage < ApplicationRecord
	belongs_to :vessel
	belongs_to :skipper, {class_name: 'User', foreign_key: :skipper_id}

	def self.skipper_voyages(skipper)
		admin = skipper.roles.any? {|role| role.name == :admin} if skipper

		if admin
			self.order(voyage_date: :asc)
		else
			self.where(skipper_id: skipper.id).order(voyage_date: :asc)
		end
	end

  def valid_voyage?(user)
    skipper_id == user.id if user
  end

	def self.vessel_voyages(vessel)
		self.where(vessel_id: vessel.id).order(voyage_date: :asc)
	end
end
