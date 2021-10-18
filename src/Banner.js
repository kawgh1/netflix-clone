import axios from "./axios";
import React, { useEffect, useState } from "react";
import requests from "./Requests";
import "./Banner.css";

function Banner() {
    function truncate(string, numChars) {
        return string?.length > numChars
            ? string.substring(0, numChars - 1) + ". . ."
            : string;
    }

    // fetch movie from tmdb
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    console.log(movie);
    return (
        <header
            className="banner"
            style={{
                backgroundImage: `url("https://i.imgur.com/e1hLQ2m.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">Movie Name</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate(
                        `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum error praesentium quam reprehenderit, doloribus
                    aperiam facilis consequatur minima eligendi, cumque natus!
                    Obcaecati vero praesentium commodi ea dicta, blanditiis
                    ducimus quis. Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Exercitationem expedita delectus
                    explicabo, harum accusamus necessitatibus optio? Distinctio,
                    consequatur facilis. Ullam cupiditate doloribus ducimus
                    facilis nobis quisquam possimus maxime! Libero, pariatur?`,
                        150
                    )}
                </h1>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    );
}

export default Banner;
