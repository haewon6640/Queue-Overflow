Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create,:show]
    resource :session, only: [:create,:destroy, :show]
    resources :posts, only: [:index, :show, :create, :update, :destroy]
    resources :comments, only: [:create, :update]
    resources :votes, only: [:create, :destroy, :update]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
