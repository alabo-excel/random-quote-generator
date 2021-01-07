import React, { Component } from 'react'
import RandomQuote from './components/randomQuote'
import Header from './components/header'
import AuthorQuote from './components/authorQuote'
import {
  BrowserRouter,
  Route
} from "react-router-dom";

class App extends Component {

  state = {
    random: {},
  }
  componentDidMount() {
    fetch('https://quote-garden.herokuapp.com/api/v3/quotes/random')
      .then(response => response.json())
      .then(data => {
        this.setState({random: data.data[0]});
      });
    }

  render() {
    const  quote = this.state.random;
      return (
        <BrowserRouter>
          <div className="App">
            <Header />
            <Route
              exact
              path="/"
              component={() => <RandomQuote quote={quote} />}
              />
            <Route path="/quotes"
              component={() => <AuthorQuote author={quote.quoteAuthor} />}
              />
          </div>
      </BrowserRouter>
      );
  }
}

export default App;
