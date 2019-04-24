class SkipperSerializer < ActiveModel::Serializer
  attributes :id, :name

	has_many :voyages, {class_name: 'User', foreign_key: :skipper_id}
end
