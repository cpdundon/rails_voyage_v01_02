# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Fire in the role set - these are all of the roles that will be used by the app.
user = User.create()
[:admin, :skipper, :crew].each do |role|
  user.add_role role
end
user.destroy

# Generate one admin so the things start off on the right foot.
role_id = Role.find_by(name: :admin).id
User.create({name: :admin, active: :true, password: :cpdundon, role_ids: role_id})
