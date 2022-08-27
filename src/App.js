import React, { useState } from "react";
import "./styles.css";

const moviesList = {
  Comedy: [
    { name: "Airplane! (1980)", rating: "7.7/10" },
    { name: "Dumb and Dumber (1994)", rating: "7.3/10" },
    { name: "Crazy Rich Asians (2018)", rating: "6.9/10" }
  ],
  Action: [
    { name: "RRR (2022)", rating: "8/10" },
    { name: "John Wick (2014)", rating: "7.4/10" },
    { name: "Mad Max: Fury Road (2015)", rating: "8.1/10" }
  ],

  SciFi: [
    { name: "Donnie Darko (2001)", rating: "8/10" },
    { name: "Eternal Sunshine Of The Spotless Mind (2004)", rating: "8.3/10" },
    { name: "Blade Runner 2049 (2017)", rating: "8/10" }
  ]
};
let moviesGenre = Object.keys(moviesList);

export default function App() {
  const [movie, setMovies] = useState([
    { name: "Airplane! (1980)", rating: "7.7/10" },
    { name: "Dumb and Dumber (1994)", rating: "7.3/10" },
    { name: "Crazy Rich Asians (2018)", rating: "6.9/10" }
  ]);

  function getList(genre) {
    let selectedGenre = moviesList[genre];
    setMovies(selectedGenre);
  }

  return (
    <div className="App">
      <h1>Movie Recommendation</h1>
      <p>Check out my favourite movies, Select a genre to get started</p>
      {moviesGenre.map((genre) => {
        return (
          <button key={genre} onClick={() => getList(genre)}>
            {genre}
          </button>
        );
      })}
      <hr></hr>

      <ul>
        {movie.map((item) => {
          return (
            <li key={item.name}>
              <div>{item.name}</div>
              <div>{item.rating}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
