import React, { Component } from 'react';
import './App.css';

import NavHeader from './components/NavHeader';
import ReviewsContainer from './components/ReviewsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavHeader />

        <section id="reviews" className="reviews-section">
          <ReviewsContainer />
        </section>
      </div>
    );
  }
}

export default App;
