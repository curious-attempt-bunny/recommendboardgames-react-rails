70.times do |index|
    next if File.exists?("data/bgg-index-page#{index+1}.html")

    curl = "curl 'https://www.boardgamegeek.com/browse/boardgame/page/#{index+1}' -H 'Pragma: no-cache' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: en-US,en;q=0.8,de;q=0.6' -H 'Upgrade-Insecure-Requests: 1' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.86 Safari/537.36' -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8' -H 'Referer: https://www.boardgamegeek.com/' -H 'Cookie: __qca=P0-656244824-1473548330161; __gads=ID=0584620a6d6cdb83:T=1480214831:S=ALNI_MbNwu4n3pb8vuOTeSyIVNjyqDTVvQ; SessionID=954cc585a21be4402163f81b424c6d6a63d7c0e9; _ga=GA1.2.1245411436.1432347219; _gid=GA1.2.1765456521.1497234378' -H 'Connection: keep-alive' -H 'Cache-Control: no-cache' --compressed"

    File.write("data/bgg-index-page#{index+1}.html", `#{curl}`)
    sleep(5)
end
# end
# grep -E '/boardgame/[0-9]{3,}' page1.html
