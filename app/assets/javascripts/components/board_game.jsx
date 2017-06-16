class BoardGame extends React.Component {
    constructor(props) {
        super(props)
        this.state = { image: props.imageFallback }
    }

    componentWillMount() {
        // ensure larger image versions are loaded last
        setTimeout(() => {
            var image = document.createElement('img')
            image.src = this.props.image
            image.onload = () => {
                this.setState({image: this.props.image})
            }
        }, 10)
    }
    
    render() {
        return (
            <div className="boardGame" style={{backgroundImage: "url('"+this.state.image+"')"}}>
                <div className="detail">
                    <span>{this.props.name}</span>
                    <br/>
                    <Rating gameId={this.props.gameId} onNewRating={this.props.onNewRating} rating={this.props.rating}/>
                </div>
            </div>
        )
    }
}

window.BoardGame = BoardGame

