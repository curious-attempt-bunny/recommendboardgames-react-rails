# recommendboardgames-react-rails

# Installation

## Create the app

On the Dokku server:

    dokku apps:create recommendboardgames-react-rails
    sudo dokku plugin:install https://github.com/dokku/dokku-postgres.git
    dokku postgres:create recommendboardgames-react-rails-database
    dokku postgres:link recommendboardgames-react-rails-database recommendboardgames-react-rails

## Push to Dokku

On your local computer:

    git clone git@github.com:curious-attempt-bunny/recommendboardgames-react-rails.git
    cd recommendboardgames-react-rails
    git remote add dokku dokku@yourhostontheinternet:recommendboardgames-react-rails
    git push dokku master

## Add HTTPS to your app

On the Dokku server:

    sudo dokku plugin:install https://github.com/dokku/dokku-letsencrypt.git
    dokku config:set --no-restart recommendboardgames-react-rails DOKKU_LETSENCRYPT_EMAIL=yourregistrationemail.com
    dokku letsencrypt recommendboardgames-react-rails
    dokku letsencrypt:cron-job --add    

## Add Google OAuth2 config to the app

On the Dokku server:
    
    dokku config:set recommendboardgames-react-rails GOOGLE_CLIENT_ID=xxx GOOGLE_CLIENT_SECRET=yyy    

# Running locally

    bundle install
    bundle exec rake db:create db:migrate
    GOOGLE_CLIENT_ID=xxx GOOGLE_CLIENT_SECRET=yyy bundle exec rails server
    open http://localhost:3000

## Add New Relic monitoring

On the Dokku server:

    dokku config:set recommendboardgames-react-rails NEW_RELIC_LICENSE_KEY=xxx NEW_RELIC_APP_NAME=yyy

# Resources

This project is built on top of https://github.com/curious-attempt-bunny/dokku-rails-omniauth-bootstrap-react.
