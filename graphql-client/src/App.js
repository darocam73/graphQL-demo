import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Actors from './components/Actors';
import ActorDetails from './components/ActorDetails';
import Genres from './components/Genres';
import GenreDetails from './components/GenreDetails';
import Movies from './components/Movies';
import MovieDetails from './components/MovieDetails';
import PageTitle from './components/PageTitle';
import MovieForm from './components/MovieForm';
import { ManagedFilterContext } from './hooks/useFilter';
import './App.scss';

function App() {
  return (
    <Router>
      <ManagedFilterContext>
        <Header />
        <div className="container-fluid container-lg">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/actors" exact>
              <PageTitle title="Actors" />
              <Actors />
            </Route>
            <Route path="/actors/:id">
              <PageTitle title="Actor details" />
              <ActorDetails />
            </Route>
            <Route path="/genres" exact>
              <PageTitle title="Genres" />
              <Genres />
            </Route>
            <Route path="/genres/:id">
              <PageTitle title="Genre details" />
              <GenreDetails />
            </Route>
            <Route path="/movies" exact>
              <PageTitle title="Movies" />
              <Movies />
            </Route>
            <Route path="/movies/create" exact>
              <PageTitle title="New movie" />
              <MovieForm />
            </Route>
            <Route path="/movies/edit/:id" exact>
              <PageTitle title="Edit movie" />
              <MovieForm />
            </Route>
            <Route path="/movies/:id">
              <PageTitle title="Movie details" />
              <MovieDetails />
            </Route>
          </Switch>
        </div>
      </ManagedFilterContext>
    </Router>
  );
}

export default App;
