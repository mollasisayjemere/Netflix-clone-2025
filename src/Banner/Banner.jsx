import React, { useState, useEffect } from "react";
import instance  from "../utils/Axios/";
import requests from "../utils/Request"; //  <--- CORRECT IMPORT STATEMENT
import bannerStyle from "./Banner.module.css"; // Assuming you have a CSS module named Banner.module.css

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await instance.get(requests.fetchNetflixOriginals);
        console.log(request.data);

        if (
          request.data &&
          request.data.results &&
          request.data.results.length > 0
        ) {
          setMovie(
            request.data.results[
              Math.floor(Math.random() * request.data.results.length)
            ]
          );
        } else {
          console.warn(
            "No movies found in the API response, or response is invalid."
          );
          setMovie({});
        }
      } catch (error) {
        console.error("error fetching banner movie:", error);
      }
    };

    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={bannerStyle["banner__contents"]}>
        <h1 className={bannerStyle["banner__title"]}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className={bannerStyle["banner__buttons"]}>
          <button
            className={`${bannerStyle["banner__button"]} ${bannerStyle["play"]}`}
          >
            Play
          </button>
          <button className={bannerStyle["banner__button"]}>My List</button>
        </div>
        <h1 className={bannerStyle["banner__description"]}>
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className={bannerStyle["banner__fadeBottom"]} />
    </header>
  );
};

export default Banner;
