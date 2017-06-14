require 'json'

raw = `grep -E 'class="filterall|class="esg-bottom.*href' data/susd.html`.lines

games = JSON.parse(File.read('data/games.json'))
nameToGameId = Hash.new
games.each do |k,v|
    nameToGameId[v['name'].downcase.gsub(/[^a-z ]/, '')] = k
end

raw.each_with_index do |_,i|
    next if i % 2 == 1
    break if i+1 >= raw.size

    # puts raw[i+0]
    # puts raw[i+1]

    classes = raw[i].match(/class="([^"]*)"/)[1].split(' ')
    game = Hash.new

    game[:classes] = classes[2..-1].select { |c| c =~ /^filter-/ }
    game[:name] = raw[i+1].match(/>([^>]*)<\/a>/)[1]
    game[:url] = raw[i+1].match(/href="([^"]*)"/)[1]
    # puts game.inspect
    gameId = nameToGameId[game[:name].downcase.gsub(/[^a-z ]/, '')]
    puts "Failed lookup for #{game[:name]}" unless gameId
end