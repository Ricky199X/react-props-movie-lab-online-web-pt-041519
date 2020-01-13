import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'
import CardFront from './card-components/CardFront.js';

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return movieData.map((movie, index) => <MovieCard 
      key={index}
      IMDBRating={movie.IMDBRating}
      title={movie.title}
      genres={movie.genres}
      poster={movie.poster}
    />)
    
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}


