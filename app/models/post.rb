class Post < ApplicationRecord
    validates :title, :body, :poster_id, presence: true

    belongs_to :poster, 
        class_name: :User

    belongs_to :question,
        foreign_key: :parent_post_id,
        class_name: :Post,
        optional: true

    has_many :answers,
        foreign_key: :parent_post_id,
        class_name: :Post

    has_many :comments,
        foreign_key: :post_id,
        class_name: :Comment

    def answer_count 
        self.answers.count
    end
end
