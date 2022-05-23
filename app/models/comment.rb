class Comment < ApplicationRecord
    validates :body, :commenter_id, :post_id, presence: true
    validates :body, length: { maximum: 600 }
    belongs_to :commenter,
        class_name: :User
    belongs_to :post
end
