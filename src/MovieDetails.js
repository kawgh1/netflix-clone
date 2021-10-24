import axios from "./axios";
import React, { useEffect, useState } from "react";
import requests from "./Requests";
import "./MovieDetails.css";
import YouTube from "react-youtube";

function MovieDetails({movie}) {

    const [trailerUrl, setTrailerUrl] = useState("");
    const [isPlaying, setIsPlaying] = useState(false);
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

    function truncate(string, numChars) {
        return string?.length > numChars
            ? string.substring(0, numChars - 1) + "..."
            : string;
    }

    const opts = {
        height: "100%",
        width: "100%",
        zIndex: "99",
        
        playerVars: {
          autoplay: 1,
          controls:1,
          start:0
        },
      };
    const trailerClick = async (movie) => {
        setIsPlaying(!isPlaying)
        
        try {
            if (trailerUrl) {
                setTrailerUrl("");
                
            } else {
                
                let trailerurl = await axios.get(
                `/movie/${movie.id}/videos?api_key=${API_KEY}`
                );
                setTrailerUrl(trailerurl.data.results[0]?.key);
            }
        } catch (error) {
            console.log(error.message)
        }
        
    };

    // console.log(movie);
    return (
        <div
            className="movieDetails"
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center",
                


            }}
        >
            <div className="movieDetails__contents">
                <h1 className="movieDetails__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="movieDetails__buttons">
                {isPlaying ? <button className="movieDetails__button-stop" onClick={() => trailerClick(movie)}>Close</button>
                : <button className="movieDetails__button-play" onClick={() => trailerClick(movie)}>Play</button>}
                    
                    
                    <button className="movieDetails__button">My List</button>
                </div>
                <h1 className="movieDetails__description">
                    {truncate(movie?.overview, 200)}
                </h1>
                
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
            {/* <div className="movieDetails--fadeBottom" /> */}
        </div>
    );
}

export default MovieDetails;
