import React, { useEffect, useState } from "react";
import JokeDisplay from "../components/JokeDisplay";

const Joke: React.FC = () => {
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    try {
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await response.json();
      setJoke(data.value);
    } catch (error) {
      console.log("Error fetching joke:", error);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  const handleNewJoke = () => {
    fetchJoke();
  };

  return <JokeDisplay joke={joke} onNewJoke={handleNewJoke} />;
};

export default Joke;