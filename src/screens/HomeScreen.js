import React from "react";
import Banner from "../Banner";
import "./HomeScreen.css";
import Nav from "../Nav";
import Row from "../Row";
import requests from "../Requests";

function HomeScreen() {
    return (
        <div className="homeScreen">
            {/* Nav */}
            <Nav />

            {/* Banner */}
            <Banner />

            {/* Row */}
            {/* <Row
                title="NETFLIX ORIGINALS"
                fetchURL={requests.fetchNetflixOriginals}
                isLargeRow
            /> */}
            <Row
                title="Trending Now"
                fetchURL={requests.fetchTrending}
                isLargeRow
            />
            <Row title="New" fetchURL={requests.fetchNew} />
            <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
            <Row title="Action" fetchURL={requests.fetchActionMovies} />
            <Row title="Comedy" fetchURL={requests.fetchComedyMovies} />
            <Row title="Thriller" fetchURL={requests.fetchThrillerMovies} />
            <Row title="Romance" fetchURL={requests.fetchRomanceMovies} />
            {/* <Row
                title="Documentaries"
                fetchURL={requests.fetchDocumentaries}
                
            /> */}
            {/* <Row title="Kids TV" fetchURL={requests.fetchKidsTV} /> */}
            <Row title="Sci Fi" fetchURL={requests.fetchSciFiMovies} />
            <Row title="Japanese" fetchURL={requests.fetchJapaneseMovies} />
            <Row title="Indian" fetchURL={requests.fetchIndianMovies} />
            <Row title="Religious" fetchURL={requests.fetchReligiousMovies} />
            <Row title="Anime" fetchURL={requests.fetchAnimeMovies} />
        </div>
    );
}

export default HomeScreen;
