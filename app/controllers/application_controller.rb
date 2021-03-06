class ApplicationController < ActionController::Base
  helper_method :current_user

  def current_user
    return @current_user if @current_user
    if session[:user_id]
        @current_user ||= User.find(session[:user_id])
    else
        @current_user = User.generate_temporary
        session[:user_id] = @current_user.id
    end
    return @current_user
  end
end