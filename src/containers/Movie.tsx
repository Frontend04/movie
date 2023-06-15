import React from 'react';
import MovieItemComponent from '../components/MovieItem';
import { AppState } from '../types';


class Movie extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      movies: [],
      currentMovie: '',
    };
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ currentMovie: event.target.value });
  };


  render() {
    const { currentMovie } = this.state;
    return (
      <div>
        <input
          type="text"
          value={currentMovie}
          onChange={this.handleInputChange}
        />
     
      </div>
    );
  }
}

export default Movie;