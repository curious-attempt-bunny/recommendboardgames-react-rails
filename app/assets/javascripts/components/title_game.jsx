class TitleGame extends React.Component {
    render() {
        return (
            <div className="titleGame" style={{backgroundImage: "url('"+this.props.image+"')"}}>
                &nbsp;
            </div>
        )
    }
}

window.TitleGame = TitleGame