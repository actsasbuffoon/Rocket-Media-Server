class Song
  include Mongoid::Document
  
  field :title, type: String
  field :artist, type: String
  
  validates_presence_of :title
  validates_presence_of :artist
end