class VoyageSerializer < ActiveModel::Serializer
  attributes :id, :voyage_date
	attribute :skipper, serializer: UserSerializer

	belongs_to :vessel
  belongs_to :skipper, {class_name: 'User', foreign_key: :skipper_id, serializer: UserSerializer}
end
