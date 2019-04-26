class VesselSerializer < ActiveModel::Serializer
  attributes :id, :name, :active

	has_many :voyages
	has_many :skippers, {through: :voyages, class_name: 'User'}
end