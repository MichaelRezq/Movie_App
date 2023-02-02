import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/generals/MovieCard";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { changeFavorite } from "../components/Store/Actions/FavoriteAction";
import { Filter } from "react-lodash";

function MoviesPage() {
  const [num, setNum] = useState();
  const [keyword, setkeyword] = useState("");
  const [url, setUrl] = useState(
    "https://api.themoviedb.org/3/movie/popular?api_key=9b743af1d4fde1d65af33c40dcccce87&"
  );
  const handleSearch = (e) => {
    setUrl(
      "https://api.themoviedb.org/3/search/movie?api_key=9b743af1d4fde1d65af33c40dcccce87&"
    );
    setkeyword(e.target.value);
  };

  const handlePagin = (e) => {
    setNum(e);
    console.log(num);
  };
  const [movies, setMovies] = React.useState([]);
  useEffect(() => {
    axios
      .get(url, {
        params: {
          page: num,
          query: keyword,
        },
      })
      // https://api.themoviedb.org/3/movie/popular?api_key=9b743af1d4fde1d65af33c40dcccce87&query=Puss in Boots: The Last Wish
      //       https://api.themoviedb.org/3/movie/popular?api_key=9b743af1d4fde1d65af33c40dcccce87&page=4
      .then((data) => {
        setMovies(data.data.results);
        // console.log(data.data.results);
      })
      .catch((e) => console.log(e));
  }, [keyword, num]);

  // =================> handlefavorite =============================
  const fav = useSelector((state) => state.Rfavorites.favorites);
  // console.log(fav);

  const dispatch = useDispatch();

  const handlefavorite = (e, movie) => {
    if (e.target.classList.contains("fa-regular")) {
      e.target.classList.remove("fa-regular");
      e.target.classList.add("fa-solid");
      // console.log(movie);
      dispatch(changeFavorite([...fav, movie]));
    } else {
      // =================> deleteFavorite =============================
      const Del = [...fav];
      // console.log(Del);
      // Del.filter((x) => {
      //   // console.log(x);
      //   // console.log(movie);
      //   return x !== movie ? Del : "";
      // });
      // console.log(Del);
      // Using the _.filter() method

      // Requiring the lodash library
      const _ = require("lodash");
      let filtered_array = _.filter(Del, function (o) {
        return o !== movie;
      });
      dispatch(changeFavorite(filtered_array));
      // Printing the output
      console.log(filtered_array);
      e.target.classList.remove("fa-solid");
      e.target.classList.add("fa-regular");
    }
  };
  return (
    <div>
      <div className="row gx-3 gy-5">
        <input
          onChange={(e) => handleSearch(e)}
          placeholder="type your movie"
        />
        {movies.map((movie) => {
          return (
            <div
              className="col-12 col-lg-2 col-md-3 position-relative shadow-sm bg-body-tertiary rounded"
              key={movie.id}
            >
              <Link className="nav-link active" to={`/view/${movie.id}`}>
                <MovieCard
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  title={movie.title}
                />
              </Link>
              <i
                onClick={(e) => handlefavorite(e, movie)}
                className="fa-regular fa-star position-absolute text-warning "
                style={{ right: "6%", top: "93%" }}
              ></i>
            </div>
          );
        })}
      </div>
      <Pagination>
        <Pagination.First onClick={() => handlePagin(1)} />
        <Pagination.Prev onClick={() => handlePagin(num - 1)} />
        <Pagination.Item onClick={() => handlePagin(1)}>{1}</Pagination.Item>
        <Pagination.Item onClick={() => handlePagin(2)}>{2}</Pagination.Item>
        <Pagination.Item onClick={() => handlePagin(3)}>{3}</Pagination.Item>
        <Pagination.Item onClick={() => handlePagin(4)}>{4}</Pagination.Item>
        <Pagination.Item onClick={() => handlePagin(5)}>{5}</Pagination.Item>
        <Pagination.Item onClick={() => handlePagin(6)}>{6}</Pagination.Item>
        <Pagination.Item onClick={() => handlePagin(7)}>{7}</Pagination.Item>
        <Pagination.Next onClick={() => handlePagin(num + 1)} />
        <Pagination.Last onClick={() => handlePagin(1)} />
      </Pagination>
    </div>
  );
}

export default MoviesPage;
