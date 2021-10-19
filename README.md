-   live site [here](https://netflix-clone-ec4be.web.app)

**npx create-react-app netflix-clone --template redux**

-   firebase init
-   firebase out folder -> build
-   firebase configure as Single Page App -> Yes
-   npm run build
-   firebase deploy

## Tools Used

-   BEM Naming convention

-   React Router
-   **npm install react-router-dom**

-   TMDB movie database API - https://www.themoviedb.org/?language=en-US - Example JSON object for a movie
    Object {
    backdrop_path: "/3tfgZt36SQ1FdbEV0YCLdzpkRn3.jpg",
    first_air_date: "2021-09-30",
    genre_ids: (2) […],
    id: 129600,
    name: "Baki Hanma",
    origin_country: (1) […],
    original_language: "ja",
    original_name: "範馬刃牙",
    overview: "To gain the skills he needs to surpass his powerful father, Baki enters Arizona State Prison to take on the notorious inmate known as Mr. Unchained.", popularity: 425.418, … },
    ​backdrop_path: "/3tfgZt36SQ1FdbEV0YCLdzpkRn3.jpg",
    first_air_date: "2021-09-30",
    genre_ids: Array [ 16, 10759 ],
    id: 129600,
    name: "Baki Hanma",
    origin_country: Array [ "JP" ],
    original_language: "ja",
    original_name: "範馬刃牙",
    overview: "To gain the skills he needs to surpass his powerful father, Baki enters Arizona State Prison to take on the notorious inmate known as Mr. Unchained.",
    popularity: 425.418,
    poster_path: "/k3HCQALcUyxebVZcfy57BIDYXUz.jpg",
    vote_average: 8.1,
    vote_count: 14,

## Features

-   Disappearing/ Fading Navbar on scroll

## Things I added

-   Movie Details Page
-   Custom text-shadow for readability on diverse background movie images
-   Custom gradient on Login Screen
