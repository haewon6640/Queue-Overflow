class Post < ApplicationRecord
    validates :title, :body, :poster_id, presence: true

    belongs_to :poster, 
        class_name: :User

    belongs_to :question,
        foreign_key: :parent_post_id,
        class_name: :Post,
        optional: true
end
