import React, { useState, useEffect } from "react";
import styled from "styled-components";
import movieAPI from "./movieAPI";

const MovieItem = styled.h3``;

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [fetching, setFetching] = useState(false);

  const getMovies = async () => {
    try {
      await movieAPI.getMovies().then((res) => {
        const result = res.data.data.movies;
        setMovies(result);
      });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
      setPage(page + 1);
    }
  };

  const fetchNextPage = async () => {
    setFetching(true);
    try {
      await movieAPI.getMovies(page).then((res) => {
        const fetchedList = res.data.data.movies;
        const lastID = movies[movies.length - 1].id;
        const filteredList = fetchedList.filter((item) => item.id < lastID);
        const mergedList = movies
          .concat(...filteredList)
          .sort((a, b) => b.id - a.id);
        setMovies(mergedList);
      });
    } catch (e) {
      console.log(e);
    } finally {
      setFetching(false);
      setPage(page + 1);
    }
  };

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight && fetching === false) {
      fetchNextPage();
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  useEffect(() => {
    console.log(movies);
  }, [movies]);
  // useEffect(() => {
  //   console.log(page);
  // }, [page]);

  return loading ? (
    <>
      <h1>Infinte Movies / Page {page - 1} </h1>
      <span>Loading...</span>
    </>
  ) : (
    <>
      <h1>Infinte Movies / Page {page - 1}</h1>
      <MovieArray movies={movies}></MovieArray>
      {fetching ? <div>Loading...</div> : <div></div>}
    </>
  );
};

const MovieArray = (props) => {
  return props.movies.map((movie) => (
    <MovieItem key={movie.id}>{movie.title}</MovieItem>
  ));
};

export default MovieList;
