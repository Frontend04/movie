import React from 'react';
import MovieItemComponent from '../components/MovieItem';
import { AppState, MovieItem } from '../types';


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

  handleAddMovie = () => {
    const { movies, currentMovie } = this.state;
    if (currentMovie.trim() !== '') {
      const newMovie: MovieItem = {
        id: Math.random().toString(),
        text: currentMovie,
      };
      this.setState({
        movies: [...movies, newMovie],
        currentMovie: '',
      });
    }
  };

  handleEditMovie = (id: string, newText: string) => {
    const { movies } = this.state;
    const updatedMovies = movies.map(movie =>
      movie.id === id ? { ...movie, text: newText } : movie
    );
    this.setState({ movies: updatedMovies });
  };

  handleDeleteMovie = (id: string) => {
    const { movies } = this.state;
    const updatedMovies = movies.filter(movie => movie.id !== id);
    this.setState({ movies: updatedMovies });
  };

  renderMovieItems() {
    const { movies, currentMovie } = this.state;
    return movies.map(movie => (
      <MovieItemComponent
        key={movie.id}
        id={movie.id}
        text={movie.text}
        onEdit={this.handleEditMovie}
        onDelete={this.handleDeleteMovie}
        isEditing={movie.id === currentMovie}
      />
    ));
  }

  render() {
    const { currentMovie } = this.state;
    return (
      <div>
        <input
          type="text"
          value={currentMovie}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAddMovie}>Добавить</button>
        {this.renderMovieItems()}
      </div>
    );
  }
}

export default Movie;