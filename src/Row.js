import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Row.css";

import MovieDetails from "./MovieDetails";

function Row({ title, fetchURL, isLargeRow = false }) {
    // set movies for category
    const [movies, setMovies] = useState([]);
    // movie clicked
    const [movieClicked, setMovieClicked] = useState(null);
    
  

    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
        // console.log(movies);
    }, [fetchURL]);



      const handleClick = async (movie) => {
          if (movie){
            setMovieClicked(movie)
            console.log("You clicked ", movie.title)
             
          }
        
      }

    return (
        <div className="row">
            <h2 className="title">{title}</h2>

            <div className="row__posters">
                {movies.map(
                    (movie) =>
                        movie.poster_path && (
                            <img
                                className={`row__poster ${
                                    isLargeRow && "row__posterLarge"
                                }`}
                                onClick={() => handleClick(movie, isLargeRow)}
                                key={movie.id}
                                // src={`${base_url}${
                                //     isLargeRow
                                //         ? movie.poster_path
                                //         : movie.backdrop_path
                                // }`}
                                src={`${base_url + movie.poster_path}`}
                                alt={movie.name}
                            />
                        )
                )}
            </div>
            
            {movieClicked && <MovieDetails movie={movieClicked}/>}
            
        </div>
    );
}

export default Row;
