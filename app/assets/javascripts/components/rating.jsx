class Rating extends React.Component {
     constructor(props) {
          super(props)

          this.state = { rating: this.props.rating }
     }

     render() {
          var key = this.props.gameId

          return (
               <fieldset className="rate">
                    <input type="radio" id={key+'_rating10'} name={key+'_rating"'} value="10" onChange={() => this.onRating(5)} checked={this.state.rating == 5}/>
                    <label htmlFor={key+'_rating10'} title="5 stars"></label>
                    <input type="radio" id={key+'_rating9'} name={key+'_rating"'} value="9" onChange={() => this.onRating(4.5)} checked={this.state.rating == 4.5}/>
                    <label className="half" htmlFor={key+'_rating9'} title="4 1/2 stars"></label>
                    <input type="radio" id={key+'_rating8'} name={key+'_rating"'} value="8" onChange={() => this.onRating(4)} checked={this.state.rating == 4}/>
                    <label htmlFor={key+'_rating8'} title="4 stars"></label>
                    <input type="radio" id={key+'_rating7'} name={key+'_rating"'} value="7" onChange={() => this.onRating(3.5)} checked={this.state.rating == 3.5}/>
                    <label className="half" htmlFor={key+'_rating7'} title="3 1/2 stars"></label>
                    <input type="radio" id={key+'_rating6'} name={key+'_rating"'} value="6" onChange={() => this.onRating(3)} checked={this.state.rating == 3}/>
                    <label htmlFor={key+'_rating6'} title="3 stars"></label>
                    <input type="radio" id={key+'_rating5'} name={key+'_rating"'} value="5" onChange={() => this.onRating(2.5)} checked={this.state.rating == 2.5}/>
                    <label className="half" htmlFor={key+'_rating5'} title="2 1/2 stars"></label>
                    <input type="radio" id={key+'_rating4'} name={key+'_rating"'} value="4" onChange={() => this.onRating(2)} checked={this.state.rating == 2}/>
                    <label htmlFor={key+'_rating4'} title="2 stars"></label>
                    <input type="radio" id={key+'_rating3'} name={key+'_rating"'} value="3" onChange={() => this.onRating(1.5)} checked={this.state.rating == 1.5}/>
                    <label className="half" htmlFor={key+'_rating3'} title="1 1/2 stars"></label>
                    <input type="radio" id={key+'_rating2'} name={key+'_rating"'} value="2" onChange={() => this.onRating(1)} checked={this.state.rating == 1}/>
                    <label htmlFor={key+'_rating2'} title="1 star"></label>
                    <input type="radio" id={key+'_rating1'} name={key+'_rating"'} value="1" onChange={() => this.onRating(0.5)} checked={this.state.rating == 0.5}/>
                    <label className="half" htmlFor={key+'_rating1'} title="1/2 star"></label>
                </fieldset>
          )
     }

     onRating(rating) {
          this.setState({ rating })
     }

     componentDidUpdate(prevProps, prevState) {
          if (prevState.rating != this.state.rating) {
               const headers = new Headers()
               headers.append("Content-Type", "application/json")
               headers.append("Accept", "application/json")

               const options = {
                    method: 'PUT',
                    credentials: 'include',
                    headers: headers,
                    body: JSON.stringify({rating: this.state.rating})
               }

               const uri = '/games/'+this.props.gameId+'/rating'

               fetch(uri, options) // ignore response

               if (this.props.onRatingChange) {
                    this.props.onRatingChange(this.props.gameId, this.state.rating)
               }
          }
          if (!prevState.rating && this.state.rating) {
               if (this.props.onNewRating) {
                    this.props.onNewRating(this.props.gameId, this.state.rating)
               }
          }
     }
}

window.Rating = Rating
               