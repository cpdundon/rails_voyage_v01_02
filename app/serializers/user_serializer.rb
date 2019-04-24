class UserSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :voyages, foreign_key: :skipper_id
end
