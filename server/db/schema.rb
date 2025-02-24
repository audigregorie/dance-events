# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.0].define(version: 2025_02_09_234649) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pg_catalog.plpgsql"

  create_table "events", force: :cascade do |t|
    t.string "event_name"
    t.text "description"
    t.string "location"
    t.string "address"
    t.string "city"
    t.string "state"
    t.string "country"
    t.decimal "ticket_price"
    t.string "currency"
    t.string "event_type"
    t.string "event_category"
    t.string "image_url"
    t.string "video_url"
    t.string "social_media"
    t.string "website"
    t.string "booking_url"
    t.text "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["description"], name: "index_events_on_description"
    t.index ["event_name"], name: "index_events_on_event_name"
  end
end
