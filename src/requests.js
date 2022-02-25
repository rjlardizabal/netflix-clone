const API_KEY = "144bd2a57da8d6bfaba29e143b983c88";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&languange=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networrks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&languange=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
