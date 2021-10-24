import axios from "./axios";
import React, { useEffect, useState } from "react";
import requests from "./Requests";
import "./Banner.css";
import YouTube from "react-youtube";

function Banner() {

    const [trailerUrl, setTrailerUrl] = useState("");
    const [isPlaying, setIsPlaying] = useState(false);
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

    function truncate(string, numChars) {
        return string?.length > numChars
            ? string.substring(0, numChars - 1) + "..."
            : string;
    }

    // fetch movie from tmdb
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTopRated);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    // console.log(movie);

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
    return (
        <header
            className="banner"
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "top center",
            }}
        >
            <div className="banner__contents">
            
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                {isPlaying ? <button className="banner__button-stop" onClick={() => trailerClick(movie)}>Close</button>
                : <button className="banner__button-play" onClick={() => trailerClick(movie)}>Play</button>}
                    
                    
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate(movie?.overview, 200)}
                </h1>
                
                
            </div>
            <div className={trailerUrl ? 'banner__youtube' : 'display-none'} >
                {trailerUrl && <YouTube  videoId={trailerUrl} opts={opts} />}
                </div>
            <div className="banner--fadeBottom" />
            
        </header>
    );
}

export default Banner;
