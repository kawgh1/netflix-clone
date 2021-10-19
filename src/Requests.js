const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const lastSevenMonths = new Date();
lastSevenMonths.setMonth(lastSevenMonths.getMonth() - 7);
// console.log("last six months = ", lastNineMonths);
// TMDB date format is YYYY-MM-DD
const formattedLastSevenMonths = lastSevenMonths.toISOString().split("T")[0];
// console.log("YYYY-MM-DD = ", formattedLastSevenMonths);
const lastTwoYears = new Date();
lastTwoYears.setFullYear(lastTwoYears.getFullYear() - 2);
const formattedLastTwoYears = lastTwoYears.toISOString().split("T")[0];

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US&sort_by=vote_average.desc&include_video=true`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&sort_by=vote_average.desc&include_video=true`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&include_video=true&sort_by=popularity.desc`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&include_video=true&sort_by=popularity.desc`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&include_video=true&sort_by=popularity.desc`,
    fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53&include_video=true&sort_by=popularity.desc`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&sort_by=popularity.desc&include_video=true`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&include_adult=false&with_genres=99&include_video=true`,
    fetchKidsTV: `/discover/tv?api_key=${API_KEY}&with_genres=10762&include_video=true`,
    fetchNew: `/discover/movie?api_key=${API_KEY}&primary_release_date.gte=${formattedLastSevenMonths}&include_video=true&sort_by=popularity.desc`,
    fetchSciFiMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878&include_video=true&sort_by=popularity.desc`,
    fetchJapaneseMovies: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=false&page=1&primary_release_date.gte=${formattedLastSevenMonths}&with_original_language=ja&without_keywords=16&without_keywords=210024&include_video=true`,
    fetchIndianMovies: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1&primary_release_date.gte=${formattedLastTwoYears}&with_original_language=hi&include_video=true`,
    fetchReligiousMovies: `discover/movie?api_key=${API_KEY}&with_keywords=258703&sort_by=popularity.desc&include_video=true`,
    fetchAnimeMovies: `discover/movie?api_key=${API_KEY}&with_keywords=210024&sort_by=popularity.desc&include_video=true`,
};

// https://api.themoviedb.org/3/trending/all/week?api_key=abc...

export default requests;
