class SessionsController < ApplicationController
  def create
    previous_user = current_user

    user = User.from_omniauth(env["omniauth.auth"])
    session[:user_id] = user.id

    unless previous_user.oauth_token
        user.merge_and_delete(previous_user)
    end

    redirect_to root_path
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end
end