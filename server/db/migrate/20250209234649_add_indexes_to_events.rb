class AddIndexesToEvents < ActiveRecord::Migration[8.0]
  def change
    add_index :events, :event_name
    add_index :events, :description
  end
end
