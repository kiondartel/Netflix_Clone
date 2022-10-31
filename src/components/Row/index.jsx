import React from 'react';
import { useEffect, useState } from 'react';
import { getMovies } from '../../api/api';
import * as Styled from './styles';
;

const imageHost = "https://image.tmdb.org/t/p/original"

const Row = ({ title, path, isLarge }) => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (_path) => {

    try {
      const data = await getMovies(_path)
      console.log("data", data)
      setMovies(data?.results)
    } catch (er) {
      console.log("fetchMovies error:", er)
    }
  };

  useEffect(() => {
    fetchMovies(path)
    return () => {

    };
  }, [path]);

  return (
    <Styled.Container className="row-container">
      <h2 className="row-header">{title}</h2>
      <Styled.Container className="row-cards">{movies?.map(movie => {
        return (<Styled.Image
          className="row-imag "
          key={movie.id}
          src={`${imageHost}${isLarge ? movie.backdrop_path : movie.poster_path}`}
          alt={movie.name} />)
      })}>
      </Styled.Container>
    </Styled.Container>
  );
};


export default Row;