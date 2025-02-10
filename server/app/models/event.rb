class Event < ApplicationRecord
  validates :event_name, uniqueness: {case_sensitive: false}
end
