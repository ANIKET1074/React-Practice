import React, { useEffect, useState } from "react";

const Joker = () => {
  const URL = "https://official-joke-api.appspot.com/random_joke";

  const [joke, setJoke] = useState({});

  useEffect(() => {
    async function getFirstJoke() {
      const response = await fetch(URL);
      const jsonResponse = await response.json();

      setJoke({
        setup: jsonResponse.setup,
        punchline: jsonResponse.punchline,
      });
    }

    getFirstJoke();
  }, []);

  const getNewJoke = async () => {
    const response = await fetch(URL);
    const jsonResponse = await response.json();
    console.log(jsonResponse);

    setJoke({
      setup: jsonResponse.setup,
      punchline: jsonResponse.punchline,
    });
  };
  return (
    <div>
      <h3>Joker</h3>
      <h2>{joke.setup}</h2>
      <h2>{joke.punchline}</h2>

      <button onClick={getNewJoke}>Get Joke</button>
    </div>
  );
};

export default Joker;
