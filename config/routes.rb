Rails.application.routes.draw do
  root to:  'pages#home'
  resources :messages, only: [:show, :index] do
    get 'first', on: :collection
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
