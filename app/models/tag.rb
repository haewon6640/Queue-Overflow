class Tag < ApplicationRecord
  validates :title, presence: true, uniqueness: true

  has_many :question_tags,
      foreign_key: :tag_id,
      class_name: :QuestionTag
  
  has_many :questions_tagged,
      through: :question_tags,
      source: :questions
end
