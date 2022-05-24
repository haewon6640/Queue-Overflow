class CreateVotes < ActiveRecord::Migration[5.2]
  def change
    create_table :votes do |t|
      t.integer :voter_id, null:false
      t.integer :post_id, null:false
      t.boolean :vote, null:false
      t.timestamps
    end
    add_index :votes, :voter_id
    add_index :votes, :post_id
    add_index :votes, [:voter_id, :post_id], unique: true
  end
end
