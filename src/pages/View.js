import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/generals/MovieCard";

function View(props) {
  const MId = props.match.params.id;
  console.log(MId);
  const [movie, setMovie] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${MId}?api_key=9b743af1d4fde1d65af33c40dcccce87
        `
      )
      .then((data) => setMovie(data.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <MovieCard
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        title={movie.title}
      />
    </div>
  );
}

export default View;
// https://api.themoviedb.org/3/movie/${MId}?api_key=9b743af1d4fde1d65af33c40dcccce87
