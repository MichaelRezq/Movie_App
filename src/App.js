import MoviesPage from "./pages/MoviesPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NoPage from "./pages/NoPage";
import Login from "./components/generals/Login";
import Signup from "./components/generals/Signup";
import Navbar from "./components/generals/Navbar";
import Favorites from "./pages/Favorites";
import "bootstrap/dist/css/bootstrap.min.css";
import View from "./pages/View";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={MoviesPage} />
          <Route exact path="/login/" component={Login} />
          <Route exact path="/signup/" component={Signup} />
          <Route exact path="/view/:id" component={View} />
          <Route exact path="/favorite/" component={Favorites} />
          <Route exact path="*" component={NoPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
