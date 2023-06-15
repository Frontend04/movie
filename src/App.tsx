import React from 'react';
import Movie from './containers/Movie';
import './App.css'
import Joke from './containers/Joke';

const App = () => {
  return (
    <div className="App">
      <Movie />
      {/* <Joke /> */}
    </div>
  );
};

export default App;
