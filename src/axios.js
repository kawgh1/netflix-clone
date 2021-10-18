import axios from "axios";

const TMDBinstance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default TMDBinstance;
