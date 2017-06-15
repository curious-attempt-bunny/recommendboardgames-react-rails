class App extends React.Component {
    renderAuthButton() {
        const { current_user } = this.props

        if (current_user.loggedIn) {
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
        var titleGame = window.games[window.categories[Object.getOwnPropertyNames(window.categories)[1]][0]]

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
          <a className="navbar-brand" href="/"><img src="/assets/logo.png" style={{display: 'inline-block'}}/>&nbsp;Recommend Board Games</a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          { this.renderAuthButton() }
        </div>
      </div>
    </nav>

    <TitleGame gameId={titleGame.id} name={titleGame.name} image={titleGame.image_large}/>

    <div className="separator"/>

    <div className="listing">
      { Object.getOwnPropertyNames(window.categories).map( category => this.renderCategory(category, titleGame)) }
    </div> 

            </div>
        )
    }

    renderCategory(category, titleGame) {
        return (
            <Category key={category} title={category}>
                { window.categories[category].slice(0,12).map( gameId => gameId == titleGame.id ? '' : this.renderGame(window.games[gameId])) }
            </Category>
        )
    }

    renderGame(game) {
        return (
            <BoardGame
                key={game.id}
                gameId={game.id}
                name={game.name}
                image={game.image_medium}
                imageFallback={game.image_small}
                />
        )
    }
}

window.App = App
