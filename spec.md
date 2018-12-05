#
Specifications for the Rails Assessment

Specs:
- [x - see Gemfile, this is a Rails project] Using Ruby on Rails for the project
- [X - both the Vessels and User have many Voyages] Include at least one has_many relationship (has_many y; e.g. User has_many Recipes) 
- [X - Voyages belongs to both User and Vessel] Include at least one belongs_to relationship (x belongs_to y; e.g. Post belongs_to User)
- [X - User and Vessels are has-many-through] Include at least two has_many through relationships (x has_many y through z; e.g. Recipe has_many Items through Ingredients)
- [X - User and Vessels are many-to-many] Include at least one many-to-many relationship (x has_many y through z, y has_many x through z; e.g. Recipe has_many Items through Ingredients, Item has_many Recipes through Ingredients)
- [X - Voyage has crew, damage and voyage_date fields] The "through" part of the has_many through includes at least one user submittable attribute, that is to say, some attribute other than its foreign keys that can be submitted by the app's user (attribute_name e.g. ingredients.quantity)
- [X - User[:name] is unique] Include reasonable validations for simple model objects (list of model objects with validations e.g. User, Recipe, Ingredient, Item)
- [X - see User model] Include a class level ActiveRecord scope method (model object & class method name and URL to see the working feature e.g. User.most_recipes URL: /users/most_recipes)
- [X - bcrypt] Include signup (how e.g. Devise)
- [X - bcrypt] Include login (how e.g. Devise)
- [X - easy delete from Session] Include logout (how e.g. Devise)
- [X - facebook/omniauth] Include third party signup/login (how e.g. Devise/OmniAuth)
- [X - see Voyages Index] Include nested resource show or index (URL e.g. users/2/recipes)
- [X - see Voyages Index] Include nested resource "new" form (URL e.g. recipes/1/ingredients/new)
- [X - Used Flash] Include form display of validation errors (form URL e.g. /recipes/new)

Confirm:
- [X - tried to keep it simple] The application is pretty DRY
- [X - would like suggestions on further simplification ideas] Limited logic in controllers
- [X - yes, built several and piped them into the controllers too] Views use helper methods if appropriate
- [X - yes, edit/new are similar in this app so built 3 partials] Views use partials if appropriate
