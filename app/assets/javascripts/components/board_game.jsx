class BoardGame extends React.Component {
  render() {
    return (
        <div className="boardGame" style={{backgroundImage: "url('"+this.props.thumbnail+"')"}}>
            &nbsp;
        </div>
    )
  }
}

window.BoardGame = BoardGame

