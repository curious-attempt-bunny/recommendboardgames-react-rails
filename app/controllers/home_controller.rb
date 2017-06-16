class HomeController < ApplicationController
  def show
    @ratings = UserGameRating.where(user_id: current_user.id).all
  end
end
