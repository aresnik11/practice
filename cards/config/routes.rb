Rails.application.routes.draw do
  get 'cards/index'
  # get 'decks/index'

  resources :decks, only: [:index]
  
  resources :decks, only: [:show] do
    resources :cards, only: [:index]
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
