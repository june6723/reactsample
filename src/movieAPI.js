import axios from "axios";

const movieAPI = axios.create({ baseURL: "https://yts-proxy.now.sh" });

const getMovies = (page = 1) => {
  return movieAPI.get("/list_movies.json", { params: { page, limit: 50 } });
};

export default { getMovies };
