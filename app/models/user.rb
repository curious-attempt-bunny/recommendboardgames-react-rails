require 'securerandom'

class User < ActiveRecord::Base
  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_initialize.tap do |user|
      user.provider = auth.provider
      user.uid = auth.uid
      user.name = auth.info.name
      user.email = auth.info.email
      user.oauth_token = auth.credentials.token
      user.oauth_expires_at = Time.at(auth.credentials.expires_at)
      user.save!
    end
  end

  def self.generate_temporary
    User.create!(name: 'Guest', email: SecureRandom.hex(30))
  end

  def merge_and_delete(temporary_user)
    UserGameRating.where(user_id: temporary_user.id).each do |ugr|
      begin
        ugr.update(user_id: self.id)
      rescue
      end
    end

    # TODO FIXME throw away all the duplcates
    UserGameRating.where(user_id: temporary_user.id).destroy_all

    temporary_user.destroy
  end
end
