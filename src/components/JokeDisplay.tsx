import React from 'react';
import { JokeDisplayProps } from '../types';


const JokeDisplay: React.FC<JokeDisplayProps> = ({ joke, onNewJoke }) => {
  return (
    <div>
      <h3>Joke of the Day</h3>
      <p>{joke}</p>
      <button onClick={onNewJoke}>New Joke</button>
    </div>
  );
};

export default JokeDisplay;