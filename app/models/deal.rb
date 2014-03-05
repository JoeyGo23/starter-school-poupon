class Deal < ActiveRecord::Base
  default_scope order('created_at DESC')
  after_create :push_create

private
  def push_create
    Pusher.url = "" # Insert your URL from Pusher here
    Pusher.logger = Rails.logger

    Pusher['poupon'].trigger('new_deal', self.as_json(except: [:created_at, :updated_at]))
  end
end
