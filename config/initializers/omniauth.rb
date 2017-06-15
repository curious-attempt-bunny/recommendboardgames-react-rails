OmniAuth.config.logger = Rails.logger
OmniAuth.config.full_host = ENV['FULL_HOST'] if ENV['FULL_HOST']

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, ENV['GOOGLE_CLIENT_ID'], ENV['GOOGLE_CLIENT_SECRET']
end