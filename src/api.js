const API_KEY = "c166649d9e9787fea18e8bb85cb68c8b"

const categories = [
  {
    name: "trending",
    title: "Em alta",
    path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
  },
  {
    name: "netflixOriginals",
    title: "Originais Netflix",
    path: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  },
  {
    name: "topRated",
    title: "Populares",
    path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
  },
  {
    name: "comedy",
    title: "Comedias",
    path: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  },
  {
    name: "romances",
    title: "Romances",
    path: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  },
  {
    name: "documentaries",
    title: "Documentários",
    path: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
  },
];

// Requisição fetch dos filmes nao Api.
export const getMovies = async (path) => {

  try {
    const url = `https://api.themoviedb.org/3${path}`;
    const reponse = await fetch(url);
    return await reponse.json()

  } catch (er) {
    console.log("error getMovies: ", er);
  }
}

export default categories;