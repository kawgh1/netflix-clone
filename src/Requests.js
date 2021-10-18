const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US&sort_by=vote_average.desc`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&sort_by=vote_average.desc`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&sort_by=popularity.desc`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&include_adult=false&with_genres=99`,
    fetchKidsTV: `/discover/tv?api_key=${API_KEY}&with_genres=10762`,
    fetchSciFiMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchJapaneseMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=vote_average.desc&page=1&primary_release_year=2020&with_original_language=ja&without_keywords=210024`,
    fetchIndianMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=vote_average.desc&page=1&primary_release_year=2020&with_original_language=hi`,
    fetchAnimeMovies: `discover/movie?api_key=${API_KEY}&with_keywords=210024&sort_by=popularity.desc`,
};

// https://api.themoviedb.org/3/trending/all/week?api_key=abc...

export default requests;
