import React from 'react';
import { useEffect, useState } from 'react';
import categories, { getMovies } from '../../api';
import * as Styled from './styles';


export const Banner = () => {
  const [movie, setMovie] = useState({});
  const fetchRandomMovie = async () => {


    try {
      const netFlixOriginalCategory = categories.find((category) => category.name === "netflixOriginals"
      );
      const data = await getMovies(netFlixOriginalCategory.path);
      const movies = data?.results;
      const randomIndex = Math.floor(Math.random() * data.lenght);
      setMovie(movies[randomIndex])
    } catch (err) {
      console.log("Baner fetchRandomMovie:", err);
    }
  };

  useEffect(() => {
    fetchRandomMovie();
  }, []);


  return (
    <Styled.Container className="banner-content">

    </Styled.Container>
  );
};

export default Banner

