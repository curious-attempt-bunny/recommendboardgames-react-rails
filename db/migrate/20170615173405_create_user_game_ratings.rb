class CreateUserGameRatings < ActiveRecord::Migration
  def change
    create_table :user_game_ratings do |t|
      t.integer :user_id
      t.integer :game_id
      t.decimal :rating, precision: 1, scale: 1

      t.timestamps null: false
      
      t.index :user_id
      t.index :game_id
      t.index :rating
    end
  end
end
