class App extends React.Component {
    renderAuthButton() {
        const { current_user } = this.props

        if (current_user) {
            return (
                <form className="navbar-form navbar-right" method="get" action="/signout">
                    <button type="submit" className="btn btn-default">Sign out</button>
                </form>
            )
        } else {
            return (
                <form className="navbar-form navbar-right" method="get" action="/auth/google_oauth2">
                    <button type="submit" className="btn btn-success">Sign in with Google</button>
                </form>
            )
        }
    }

    render() {
        return (
            <div>

    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/">Recommend Board Games</a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          { this.renderAuthButton() }
        </div>
      </div>
    </nav>

    <TitleGame gameId={40834} name={'Dominion: Intrigue'} image={'//cf.geekdo-images.com/images/pic460011.jpg'}/>

    <div className="separator"/>

    <div className="listing">
      <Category>
<BoardGame gameId={178900} name={'Codenames'} thumbnail={'//cf.geekdo-images.com/images/pic2582929_t.jpg'}/>
<BoardGame gameId={104162} name={'Descent: Journeys in the Dark (Second Edition)'} thumbnail={'//cf.geekdo-images.com/images/pic1180640_t.jpg'}/>
<BoardGame gameId={36218} name={'Dominion'} thumbnail={'//cf.geekdo-images.com/images/pic394356_t.jpg'}/>
<BoardGame gameId={171915} name={'Dominion: Adventures'} thumbnail={'//cf.geekdo-images.com/images/pic2374911_t.jpg'}/>
<BoardGame gameId={66098} name={'Dominion: Alchemy'} thumbnail={'//cf.geekdo-images.com/images/pic698779_t.jpg'}/>
<BoardGame gameId={90850} name={'Dominion: Cornucopia'} thumbnail={'//cf.geekdo-images.com/images/pic950200_t.jpg'}/>
      </Category>
      <Category>
<BoardGame gameId={125403} name={'Dominion: Dark Ages'} thumbnail={'//cf.geekdo-images.com/images/pic1321190_t.jpg'}/>
<BoardGame gameId={192951} name={'Dominion: Empires'} thumbnail={'//cf.geekdo-images.com/images/pic2868179_t.jpg'}/>
<BoardGame gameId={137166} name={'Dominion: Guilds'} thumbnail={'//cf.geekdo-images.com/images/pic1646917_t.jpg'}/>
<BoardGame gameId={104557} name={'Dominion: Hinterlands'} thumbnail={'//cf.geekdo-images.com/images/pic1077695_t.jpg'}/>
<BoardGame gameId={66690} name={'Dominion: Prosperity'} thumbnail={'//cf.geekdo-images.com/images/pic1747320_t.jpg'}/>
<BoardGame gameId={150999} name={'Valley of the Kings'} thumbnail={'//cf.geekdo-images.com/images/pic1848490_t.jpg'}/>
      </Category>
      <Category>
<BoardGame gameId={79828} name={'A Few Acres of Snow'} thumbnail={'//cf.geekdo-images.com/images/pic905905_t.jpg'}/>
<BoardGame gameId={54043} name={'Jaipur'} thumbnail={'//cf.geekdo-images.com/images/pic725500_t.jpg'}/>
<BoardGame gameId={30549} name={'Pandemic'} thumbnail={'//cf.geekdo-images.com/images/pic1534148_t.jpg'}/>
<BoardGame gameId={161936} name={'Pandemic Legacy: Season 1'} thumbnail={'//cf.geekdo-images.com/images/pic2452831_t.png'}/>
<BoardGame gameId={2651} name={'Power Grid'} thumbnail={'//cf.geekdo-images.com/images/pic173153_t.jpg'}/>
<BoardGame gameId={44163} name={'Power Grid: Factory Manager'} thumbnail={'//cf.geekdo-images.com/images/pic577313_t.jpg'}/>
      </Category>
      <Category>
<BoardGame gameId={3076} name={'Puerto Rico'} thumbnail={'//cf.geekdo-images.com/images/pic158548_t.jpg'}/>
<BoardGame gameId={28143} name={'Race for the Galaxy'} thumbnail={'//cf.geekdo-images.com/images/pic236327_t.jpg'}/>
<BoardGame gameId={148228} name={'Splendor'} thumbnail={'//cf.geekdo-images.com/images/pic1904079_t.jpg'}/>
<BoardGame gameId={124742} name={'Android: Netrunner'} thumbnail={'//cf.geekdo-images.com/images/pic1324609_t.jpg'}/>
<BoardGame gameId={715} name={'Escape from Colditz'} thumbnail={'//cf.geekdo-images.com/images/pic3117438_t.jpg'}/>
<BoardGame gameId={33160} name={'Endeavor'} thumbnail={'//cf.geekdo-images.com/images/pic379881_t.jpg'}/>
<BoardGame gameId={145928} name={'Empire Engine'} thumbnail={'//cf.g-images.com/images/pic2197596_t.jpg'}/>
      </Category>
      <Category>
<BoardGame gameId={68425} name={'Eminent Domain'} thumbnail={'//cf.geekdo-images.com/images/pic1160506_t.jpg'}/>
<BoardGame gameId={146021} name={'Eldritch Horror'} thumbnail={'//cf.geekdo-images.com/images/pic1872452_t.jpg'}/>
<BoardGame gameId={10} name={'Elfenland'} thumbnail={'//cf.geekdo-images.com/images/pic1798136_t.jpg'}/>
<BoardGame gameId={137405} name={'Escape: Quest'} thumbnail={'//cf.geekdo-images.com/images/pic1727702_t.jpg'}/>
<BoardGame gameId={137479} name={'Elder Sign: Unseen Forces'} thumbnail={'//cf.geekdo-images.com/images/pic1639617_t.jpg'}/>
<BoardGame gameId={100423} name={'Elder Sign'} thumbnail={'//cf.geekdo-images.com/images/pic1236119_t.jpg'}/>
      </Category>
      <Category>
<BoardGame gameId={25313} name={'An Evening With Bram Stoker\'s Dracula'} thumbnail={'//cf.geekdo-images.com/images/pic163304_t.jpg'}/>
<BoardGame gameId={154904} name={'Easy Breezy Travel Agency'} thumbnail={'//cf.geekdo-images.com/images/pic1951597_t.jpg'}/>
<BoardGame gameId={185497} name={'Dwarves in Trouble'} thumbnail={'//cf.geekdo-images.com/images/pic3080665_t.jpg'}/>
<BoardGame gameId={66356} name={'Dungeons & Dragons: Wrath of Ashardalon Board Game'} thumbnail={'//cf.geekdo-images.com/images/pic968280_t.jpg'}/>
<BoardGame gameId={139583} name={'Dungeon Roll: Hero Booster Pack #1'} thumbnail={'//cf.geekdo-images.com/images/pic1750877_t.jpg'}/>
<BoardGame gameId={139582} name={'Dungeon Roll Hero: Guild Leader'} thumbnail={'//cf.geekdo-images.com/images/pic1738140_t.jpg'}/>
      </Category>
      <Category>
<BoardGame gameId={128236} name={'Escape: Illusions'} thumbnail={'//cf.geekdo-images.com/images/pic1374177_t.jpg'}/>
<BoardGame gameId={27588} name={'Zooloretto'} thumbnail={'//cf.geekdo-images.com/images/pic187388_t.jpg'}/>
<BoardGame gameId={113294} name={'Escape: The Curse of the Temple'} thumbnail={'//cf.geekdo-images.com/images/pic1724684_t.jpg'}/>
<BoardGame gameId={122115} name={'Escape: The Curse of the Temple – The Pit'} thumbnail={'//cf.geekdo-images.com/images/pic1259769_t.jpg'}/>
<BoardGame gameId={68227} name={'Fabula'} thumbnail={''}/>
<BoardGame gameId={172242} name={'Exploding Kittens: NSFW Deck'} thumbnail={'//cf.geekdo-images.com/images/pic2815278_t.jpg'}/>
      </Category>
      <Category>
<BoardGame gameId={172225} name={'Exploding Kittens'} thumbnail={'//cf.geekdo-images.com/images/pic2691976_t.png'}/>
<BoardGame gameId={71074} name={'Expedition: Northwest Passage'} thumbnail={'//cf.geekdo-images.com/images/pic1681453_t.jpg'}/>
<BoardGame gameId={76546} name={'Expedition: Congo River 1884'} thumbnail={'//cf.geekdo-images.com/images/pic1299178_t.jpg'}/>
<BoardGame gameId={155703} name={'Evolution'} thumbnail={'//cf.geekdo-images.com/images/pic2558560_t.jpg'}/>
<BoardGame gameId={167911} name={'Escape: The Curse of the Temple – The Maze'} thumbnail={'//cf.geekdo-images.com/images/pic2297020_t.png'}/>
<BoardGame gameId={157820} name={'Escape: The Curse of the Temple – Big Box'} thumbnail={'//cf.geekdo-images.com/images/pic1987738_t.jpg'}/>
      </Category>
      <Category>
<BoardGame gameId={158932} name={'Escape: The Curse of the Temple – The Maya Calendar'} thumbnail={'//cf.geekdo-images.com/images/pic2297034_t.png'}/>
<BoardGame gameId={167909} name={'Escape: The Curse of the Temple – Quest Chambers'} thumbnail={'//cf.geekdo-images.com/images/pic2297030_t.png'}/>
<BoardGame gameId={167910} name={'Escape: The Curse of the Temple – New Characters'} thumbnail={'//cf.geekdo-images.com/images/pic2297021_t.png'}/>
<BoardGame gameId={36235} name={'The Duke'} thumbnail={'//cf.geekdo-images.com/images/pic1688903_t.jpg'}/>
<BoardGame gameId={149503} name={'Escape: The Curse of the Temple – Fountain'} thumbnail={'//cf.geekdo-images.com/images/pic1805747_t.jpg'}/>
<BoardGame gameId={132128} name={'Escape: The Curse of the Temple – Doomed'} thumbnail={'//cf.geekdo-images.com/images/pic1483756_t.jpg'}/>
      </Category>
      <Category>
<BoardGame gameId={138788} name={'Dungeon Roll'} thumbnail={'//cf.geekdo-images.com/images/pic1585905_t.png'}/>
<BoardGame gameId={62219} name={'Dominant Species'} thumbnail={'//cf.geekdo-images.com/images/pic784193_t.jpg'}/>
<BoardGame gameId={86246} name={'Drum Roll'} thumbnail={'//cf.geekdo-images.com/images/pic979376_t.jpg'}/>
<BoardGame gameId={15512} name={'Diamant'} thumbnail={'//cf.geekdo-images.com/images/pic3103688_t.jpg'}/>
<BoardGame gameId={54998} name={'Cyclades'} thumbnail={'//cf.geekdo-images.com/images/pic584779_t.jpg'}/>
<BoardGame gameId={163354} name={'Cypher'} thumbnail={'//cf.geekdo-images.com/images/pic2117800_t.jpg'}/>
      </Category>
      <Category>
<BoardGame gameId={2083} name={'Checkers'} thumbnail={'//cf.geekdo-images.com/images/pic113720_t.jpg'}/>
<BoardGame gameId={44} name={'David & Goliath'} thumbnail={'//cf.geekdo-images.com/images/pic359902_t.jpg'}/>
<BoardGame gameId={192802} name={'Days of Ire: Budapest 1956'} thumbnail={'//cf.geekdo-images.com/images/pic2991622_t.jpg'}/>
<BoardGame gameId={38364} name={'Days of Steam'} thumbnail={'//cf.geekdo-images.com/images/pic554441_t.jpg'}/>
<BoardGame gameId={25821} name={'The Werewolves of Miller\'s Hollow'} thumbnail={'//cf.geekdo-images.com/images/pic510856_t.jpg'}/>
<BoardGame gameId={51811} name={'Dominion: Seaside'} thumbnail={'//cf.geekdo-images.com/images/pic543471_t.jpg'}/>
      </Category>
    </div> 

            </div>
        )
    }
}

window.App = App
