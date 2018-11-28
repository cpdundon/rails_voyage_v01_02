Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	root 'sessions#signin'
  get '/signin' => 'sessions#signin'
  post '/signin' => 'sessions#create'
  post '/logout' => 'sessions#destroy'
  resources :users, only: [:index, :new, :create, :show, :edit, :update]
end
