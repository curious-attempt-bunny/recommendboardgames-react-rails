require 'json'

games = JSON.parse(File.read('data/games.json'))

categories = Hash.new

categories['Trending now'] = `grep -E '/boardgame/[0-9]{2,}' data/bgg-index-page1.html | head -n 50`.lines.map { |line| line.match(/"\/boardgame\/([0-9]{2,}+)\/[^"]*/)[1].to_i }

categories['Top games'] = `grep -E '/boardgame/[0-9]{2,}' data/bgg-index-page1.html | grep src`.lines.map { |line| line.match(/"\/boardgame\/([0-9]{2,}+)\/[^"]*/)[1].to_i }

categories['2 player games'] = games.to_a.select { |k| k[1]['minplayers'] == 2 && k[1]['maxplayers'] == 2 }.map { |k| k[0].to_i }

categories['For 3 or 4 players'] = games.to_a.select { |k| k[1]['maxplayers'] >= 3 && k[1]['maxplayers'] <= 4 }.map { |k| k[0].to_i }

categories['Solo playable games'] = games.to_a.select { |k| k[1]['minplayers'] == 1 }.map { |k| k[0].to_i }

categories['Light games'] = games.to_a.select { |k| k[1]['complexity'] < 2 }.map { |k| k[0].to_i }

categories['Involved games'] = games.to_a.select { |k| k[1]['complexity'] > 3 }.map { |k| k[0].to_i }

categories['Quick games'] = games.to_a.select { |k| playtime = k[1]['minplaytime']+k[1]['maxplaytime']; playtime <= 30 }.map { |k| k[0].to_i }

categories['Long games'] = games.to_a.select { |k| playtime = k[1]['minplaytime']+k[1]['maxplaytime']; playtime > 60 }.map { |k| k[0].to_i }

File.write('data/categories.json', JSON.generate(categories))