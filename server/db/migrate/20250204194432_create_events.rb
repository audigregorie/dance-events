class CreateEvents < ActiveRecord::Migration[8.0]
  def change
    create_table :events do |t|
      t.string :event_name
      t.text :description
      t.string :location
      t.string :address
      t.string :city
      t.string :state
      t.string :country
      t.decimal :ticket_price
      t.string :currency
      t.string :event_type
      t.string :event_category
      t.string :image_url
      t.string :video_url
      t.string :social_media
      t.string :website
      t.string :booking_url
      t.text :notes

      t.timestamps
    end
  end
end
