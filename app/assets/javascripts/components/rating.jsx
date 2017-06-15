class Rating extends React.Component {
     render() {
          var key = Math.random() // TODO FIXME a bit of a hack

          return (
               <fieldset className="rate">
                    <input type="radio" id={key+'_rating10'} name={key+'_rating"'}value="10" /><label htmlFor={key+'_rating10'} title="5 stars"></label>
                    <input type="radio" id={key+'_rating9'} name={key+'_rating"'}value="9" /><label className="half" htmlFor={key+'_rating9'} title="4 1/2 stars"></label>
                    <input type="radio" id={key+'_rating8'} name={key+'_rating"'}value="8" /><label htmlFor={key+'_rating8'} title="4 stars"></label>
                    <input type="radio" id={key+'_rating7'} name={key+'_rating"'}value="7" /><label className="half" htmlFor={key+'_rating7'} title="3 1/2 stars"></label>
                    <input type="radio" id={key+'_rating6'} name={key+'_rating"'}value="6" /><label htmlFor={key+'_rating6'} title="3 stars"></label>
                    <input type="radio" id={key+'_rating5'} name={key+'_rating"'}value="5" /><label className="half" htmlFor={key+'_rating5'} title="2 1/2 stars"></label>
                    <input type="radio" id={key+'_rating4'} name={key+'_rating"'}value="4" /><label htmlFor={key+'_rating4'} title="2 stars"></label>
                    <input type="radio" id={key+'_rating3'} name={key+'_rating"'}value="3" /><label className="half" htmlFor={key+'_rating3'} title="1 1/2 stars"></label>
                    <input type="radio" id={key+'_rating2'} name={key+'_rating"'}value="2" /><label htmlFor={key+'_rating2'} title="1 star"></label>
                    <input type="radio" id={key+'_rating1'} name={key+'_rating"'}value="1" /><label className="half" htmlFor={key+'_rating1'} title="1/2 star"></label>
                </fieldset>
          )
     }
}

window.Rating = Rating
               