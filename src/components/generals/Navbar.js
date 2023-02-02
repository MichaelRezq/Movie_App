import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const favLength = useSelector((state) => state.Rfavorites.favorites);
  // console.log(favLength);
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        Movie App
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                Signup
              </Link>
            </li>
            <li className="nav-item position-relative">
              <Link className="nav-link" to="/favorite">
                Favorites
                <span className="position-absolute top-50 start-100 translate-middle badge rounded-circle bg-info">
                  {favLength.length}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
