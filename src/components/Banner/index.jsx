import React from "react";
import { useEffect, useState } from "react";
import categories, { getMovies } from "../../api/api";
import * as Styled from "./styles";

export const Banner = () => {
  const [movie, setMovie] = useState({});
  const fetchRandomMovie = async () => {
    try {
      const netFlixOriginalCategory = categories.find(
        (category) => category.name === "netflixOriginals"
      );
      const data = await getMovies(netFlixOriginalCategory.path);
      const movies = data?.results;
      const randomIndex = Math.floor(Math.random() * movies.length);
      setMovie(movies[randomIndex]);
    } catch (err) {
      console.log("Baner fetchRandomMovie:", err);
    }
  };

  useEffect(() => {
    fetchRandomMovie();
  }, []);

  return (
    <Styled.Div
      className="banner-container"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <Styled.Container className="banner-content">
        <Styled.H1>
          {movie?.title || movie?.name || movie?.original_name}
        </Styled.H1>
      </Styled.Container>

      <Styled.Container className="button-content">
        <Styled.Button>Assistir</Styled.Button>
        <Styled.Button>Minha Lista</Styled.Button>
      </Styled.Container>

      <Styled.Container>
        <Styled.P>{movie?.overview}</Styled.P>
      </Styled.Container>
    </Styled.Div>
  );
};

export default Banner;
