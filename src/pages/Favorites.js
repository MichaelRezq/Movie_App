import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MovieCard from "../components/generals/MovieCard";

function Favorites() {
  const movies = useSelector((state) => state.Rfavorites.favorites);
  console.log(movies);
  return (
    <div>
      {movies.map((movie) => {
        return (
          <div className="col-12 col-lg-2 col-md-3">
            <Link className="nav-link active" to={`/view/${movie.id}`}>
              <MovieCard
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                title={movie.title}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Favorites;
