class BoardGame extends React.Component {
  render() {
    var url = this.props.thumbnail
    var pos = url.indexOf('_t.')
    if (pos != -1) {
        url = url.substring(0, pos)+url.substring(pos+'_t'.length)
    }

    return (
        <div className="boardGame" style={{backgroundImage: "url('"+url+"')"}}>
            &nbsp;
        </div>
    )
  }
}

window.BoardGame = BoardGame

