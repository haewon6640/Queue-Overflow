class Post < ApplicationRecord
    validates :title, :body, :poster_id, presence: true

    belongs_to :poster, 
        primary_key: :id,
        foreign_key: :poster_id,
        class_name: :User

    belongs_to :question,
        foreign_key: :parent_post_id,
        class_name: :Post,
        optional: true

    has_many :answers,
        foreign_key: :parent_post_id,
        class_name: :Post,
        dependent: :destroy

    has_many :comments,
        foreign_key: :post_id,
        class_name: :Comment

    has_many :votes,
        foreign_key: :post_id,
        class_name: :Vote

    has_many :voted_users,
        through: :votes,
        source: :voter
    
    has_many :question_tags,
        foreign_key: :question_id,
        class_name: :QuestionTag,
        dependent: :destroy

    has_many :tags,
        through: :question_tags,
        source: :tags
        
    def answer_count 
        self.answers.count
    end

    def score
        vote_count(true) - vote_count(false)
    end

    private 
    def vote_count(boolean)
        self.votes.where(vote: boolean).count
    end


end
