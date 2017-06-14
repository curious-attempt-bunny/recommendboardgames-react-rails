require 'json'

raw = `grep -A 300 -E "h3.*Game of the year" data/sdj.html | grep -A 2 "<tr>"`.lines

games = JSON.parse(File.read('data/games.json'))
nameToGameId = Hash.new
games.each do |k,v|
    nameToGameId[v['name'].downcase.gsub(/[^a-z ]/, '')] = k
end

raw.each_with_index do |item, i|
    next unless i % 4 == 0
    unless raw[i+1] =~ /(19|20)[0-9]{2}/
        # puts raw[i+1]
        next
    end
    # puts raw[i]
    # puts raw[i+1]
    # puts raw[i+2]

    name = raw[i+2].match(/>([^>]*)<\/a>/)[1]
    break if name.start_with?('[')
    # puts name
    # break

    gameId = nameToGameId[name.downcase.gsub(/[^a-z ]/, '')]
    puts "Failed lookup for #{name}" unless gameId
end