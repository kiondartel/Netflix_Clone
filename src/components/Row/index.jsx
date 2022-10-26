import React from 'react';
import { useEffect, useState } from 'react';
import { getMovies } from '../../api';
import * as Styled from './styles';

const imageHost = "https://image.tmdb.org/t/p/original"

const Row = ({ title, path }) => {
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
      <Styled.H2 className="row-header">{title}</Styled.H2>
      <Styled.Container className="row-cards">{movies?.map(movie => {
        return (<Styled.Image className="row-image" key={movie.id} src={`${imageHost}${movie.poster_path}`} alt={movie.name} />)
      })}>
      </Styled.Container>
    </Styled.Container>
  );
};


export default Row;