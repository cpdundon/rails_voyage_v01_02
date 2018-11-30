class Voyage < ApplicationRecord
	belongs_to :vessel
	belongs_to :skipper, {class_name: 'User', foreign_key: :skipper_id}
end
