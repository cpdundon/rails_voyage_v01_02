# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

This code is covered by the MIT license.

Hi - thank you for looking at my application.  Please clone it down from github.  You will need to drop the database and migrate a new one.  Then you will want to seed the db - see the db/seeds.rb file for more information on the seed results.

To do that:
rake db:drop
rake db:migrate
rake db:seed

Next, the omniauth needs to be configured.  You will need to set up an account on facebook's developer site and you will need a local .env file.  Please see the documentation at the Flatiron School on this at - https://learn.co/tracks/full-stack-web-development-v6/rails/authentication/omniauth.

That is it!

Best,
-- Chris Dundon
