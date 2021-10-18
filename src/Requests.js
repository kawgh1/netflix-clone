const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchRopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchKidsMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10762`,
    fetchSciFiMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchJapaneseMovies: `/discover/movie?api_key=${API_KEY}&with_genres=233`,
    fetchIndianMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&primary_release_year=2020&with_original_language=hi`,
};

// https://api.themoviedb.org/3/trending/all/week?api_key=abc...

export default requests;
