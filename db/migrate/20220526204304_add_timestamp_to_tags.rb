class AddTimestampToTags < ActiveRecord::Migration[5.2]
  def change
    add_timestamps :tags, default: Time.zone.now
    change_column_default :tags, :created_at, nil
    change_column_default :tags, :updated_at, nil
  end
end
