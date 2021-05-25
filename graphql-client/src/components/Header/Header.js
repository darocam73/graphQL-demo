import { useEffect, useRef } from 'react';
import { NavLink, useHistory, Route } from 'react-router-dom';
import { useFilter } from '../../hooks/useFilter';

const Header = () => {
  const { filterValue, setFilterValue } = useFilter();
  const history = useHistory();
  const searchInput = useRef();

  const handleFilter = (e) => {
    e.preventDefault();
    const { value: searchValue } = searchInput?.current;
    if (searchValue?.trim().length > 0) {
      setFilterValue(searchValue);
    }
  }

  useEffect(() => {
    if (searchInput?.current) {
      searchInput.current.value = filterValue || '';
    }
  }, [filterValue]);

  useEffect(() => {
    history.listen(() => {
      setFilterValue(undefined);
    })
  }, [history, setFilterValue]);

  return (
    <nav className="navbar navbar-light navbar-expand fixed-top" style={{ backgroundColor: '#e3f2fd' }}>
      <div className="container">
        <img
          alt="Main logo"
          src="/002-video-player.svg"
          className="card-img-top"
          style={{ width: '30px', marginRight: '10px' }}
        />
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/" exact>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/movies">Movies</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/actors">Actors</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/genres">Genres</NavLink>
            </li>
          </ul>
          <Route path={['/movies', '/actors', '/genres']} exact>
            <form className="d-flex" onSubmit={handleFilter}>
              <input
                className="form-control me-2"
                type="search"
                name="search"
                placeholder="Search"
                aria-label="Search"
                defaultValue={filterValue || ''}
                ref={searchInput}
              />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </Route>
        </div>
      </div>
    </nav>
  );
};

export default Header;
