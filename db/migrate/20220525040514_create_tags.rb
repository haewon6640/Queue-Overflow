class CreateTags < ActiveRecord::Migration[5.2]
  def change
    create_table :tags do |t|
      t.string :title, null: false
    end
    add_index :tags, :title, unique: true
    create_table :questionTags do |t|
      t.integer :question_id, null: false
      t.integer :tag_id, null: false
    end
    add_index :questionTags, :question_id
    add_index :questionTags, :tag_id
    add_index :questionTags, %i[question_id tag_id], unique: true
  end
end
