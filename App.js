import { useState, useEffect } from "react";
import "./app.css";
import searchIcon from "./search.svg";
import MovieCard from "./MovieCard";

//47d72216

const API_URL = "http://www.omdbapi.com?apikey=47d72216";

const movie1 = {
  Title: "Miles Morales Ultimate Spiderman",
  Year: "2021",
  imdbID: "tt14311386",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNmMzODkwNDktMTkyMy00MmU5LWE4MGMtYzIzZjdjNmJiZDRiXkEyXkFqcGdeQXVyNDU1NDQ0NzE@._V1_SX300.jpg",
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [SearchTerm, setSearchTerm] = useState([]);
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("spiderman");
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="search for movies"
          value={SearchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={searchIcon} alt="search" onClick={() => searchMovies(SearchTerm)} />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
