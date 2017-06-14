require 'json'

games = Hash.new

details = `grep GEEK.geekitemPreload data/bgg-game-*.html`.lines.map { |line| line.match(/(\{.+\})/)[1] }
details.each do |detail|
    detail = JSON.parse(detail)

    # detail['item'].keys.each do |key|
    #     puts key
    #     puts detail['item'][key].inspect
    # end
    # puts "--"

    game = Hash.new
    game[:id] = detail['item']['objectid'].to_i
    game[:name] = detail['item']['name']
    game[:url] = detail['item']['href']
    game[:image_large] = "https://cf.geekdo-images.com/images/"+detail['item']['imageurl'].split('/')[-1]
    game[:image_medium] = game[:image_large].sub(/(.*)(\.[^\.]+)$/, '\1_md\2')
    game[:image_small] = game[:image_large].sub(/(.*)(\.[^\.]+)$/, '\1_t\2')
    game[:minplaytime] = detail['item']['minplaytime'].to_i
    game[:maxplaytime] = detail['item']['maxplaytime'].to_i
    game[:minplayers] = detail['item']['minplayers'].to_i
    game[:maxplayers] = detail['item']['maxplayers'].to_i
    game[:minage] = detail['item']['minage'].to_i
    game[:complexity] = detail['item']['polls']['boardgameweight']['averageweight'].to_f
    # break

    games[game[:id]] = game
end

File.write('data/games.json', JSON.generate(games))