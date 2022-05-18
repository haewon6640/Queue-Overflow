class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.integer :poster_id, null: false
      t.integer :parent_post_id

      t.timestamps
    end
    add_index :posts, :poster_id
    add_index :posts, :parent_post_id
  end
end
