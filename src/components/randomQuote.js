import React, { Component } from 'react'
import '../random.css'
import { Link } from 'react-router-dom'


class randomQuote extends Component {
  // state = {
  //   random: {},
  // }
  //
  // componentDidMount() {
  //   fetch('https://quote-garden.herokuapp.com/api/v3/quotes/random')
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState({random: data.data[0]});
  //       console.log(this.state.random)
  //     });
  //   }

  render() {
    const quote = this.props.quote;
    if(quote.quoteText === undefined){
      return (
        <div className="text-center">
          <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
          </div>
      </div>
      )
    }else {
      return (
        <div className="App">
            <div className="row">
              <div className="col-lg-4 col-sm-10 mx-auto mt-5 pt-5">
                <h4 className="pl-3">{quote.quoteText}</h4>
                <Link to="/quotes">
                <div className="button mt-5 p-3 d-flex justify-content-between">
                  <div>
                    <h6>{quote.quoteAuthor}</h6>
                    <p>{quote.quoteGenre}</p>
                  </div>
                  <div className="mt-3">
                    <i className="material-icons">arrow_right_alt</i>
                  </div>
                </div>
              </Link>
              </div>
            </div>
        </div>
      )
    }
  }
}

export default randomQuote;
