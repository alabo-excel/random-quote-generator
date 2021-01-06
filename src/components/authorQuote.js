import React, { Component } from 'react'
import '../random.css'

class authorQuote extends Component {
  state = {
    quotes: []
  }
  componentDidMount() {
    fetch(`https://quote-garden.herokuapp.com/api/v3/quotes/?author=${this.props.author}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          quotes: data.data.slice(0, 5)
        })
        console.log(this.state.quotes)
      });
    }

  render() {
    const quotes = this.state.quotes.map(quote => {
      return(
        <div key={quote._id}>
          <div className="row" >
            <div className="col-4 mx-auto  mt-5">
              <h4 className="pl-3">{quote.quoteText}</h4>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="App">
        <div className="text-center">
          <h3>{this.props.author}</h3>
        </div>
        <div>{quotes}</div>
      </div>
    );
  }
}

export default authorQuote;
