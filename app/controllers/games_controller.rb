class GamesController < ApplicationController
  def rating
    UserGameRating.where(user_id: current_user.id, game_id: params[:game_id]).first_or_create.update(rating: params[:rating])
    render :json => {success: true}
  end
end
