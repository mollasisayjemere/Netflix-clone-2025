

import React, { useState, useEffect } from "react";
import axios from "../../utils/Axios";  // or import axios from 'axios'; if you installed it directly
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

import rowStyle from "./Row.module.css";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(`Fetching ${title} from: ${fetchUrl}`);
        const request = await axios.get(fetchUrl);
        console.log(`Data for ${title}:`, request.data);

        if (request.data && request.data.results && Array.isArray(request.data.results)) {
          setMovies(request.data.results);
        } else {
          console.warn(`Invalid data structure for ${title}:`, request.data);
          setMovies([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setMovies([]);
      }
    };
    fetchData();
  }, [fetchUrl, title]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {
          console.error("Error fetching trailer:", error);
        });
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className={rowStyle.row}>
      <h2>{title}</h2>
      <div className={rowStyle.row_posters}>
        {movies === null ? (
          <p>Loading {title}...</p>
        ) : movies.length > 0 ? (
          movies.map((movie, index) => (
            <img
              key={index}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              className={`${rowStyle.row_poster} ${
                isLargeRow ? rowStyle.row_posterLarge : ""
              }`}
              onClick={() => handleClick(movie)}
            />
          ))
        ) : (
          <p>No movies found for {title}.</p>
        )}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row; 