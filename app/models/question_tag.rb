class QuestionTag < ApplicationRecord
  validates :question_id, :tag_id, presence: true
  validates :question_id, uniqueness: { scope: :tag_id }

  belongs_to :questions, foreign_key: :question_id, class_name: :Post

  belongs_to :tags, primary_key: :id, foreign_key: :tag_id, class_name: :Tag
end
