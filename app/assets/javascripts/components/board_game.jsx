class BoardGame extends React.Component {
    constructor(props) {
        super(props)
        this.state = { image: props.imageFallback }
    }

    componentWillMount() {
        var image = document.createElement('img')
        image.src = this.props.image
        image.onload = () => {
            this.setState({image: this.props.image})
        }
    }
    
    render() {
        return (
            <div className="boardGame" style={{backgroundImage: "url('"+this.state.image+"')"}}>
                &nbsp;
            </div>
        )
    }
}

window.BoardGame = BoardGame

