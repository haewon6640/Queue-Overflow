Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create,:show, :index]
    resource :session, only: [:create,:destroy, :show]
    resources :posts, only: [:index, :show,:create, :update, :destroy]
    resources :comments, only: [:create, :update]
    resources :votes, only: [:create, :destroy, :update]
    resources :tags, only: [:index]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
