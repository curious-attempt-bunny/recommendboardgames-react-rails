require 'json'

games = JSON.parse(File.read('data/games.json'))
categories = JSON.parse(File.read('data/categories.json'))

File.write('../app/assets/javascripts/data//data.js', "window.games = #{JSON.generate(games)};\nwindow.categories = #{JSON.generate(categories)};\n")