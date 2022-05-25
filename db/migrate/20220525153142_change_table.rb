class ChangeTable < ActiveRecord::Migration[5.2]
  def change
    rename_table :questionTags, :question_tags
  end
end
