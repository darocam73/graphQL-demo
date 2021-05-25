import { useEffect, useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { getList } from '../../lib/api/movies';
import Breadcrumb from '../Breadcrumb';
import { useFilter } from '../../hooks/useFilter';
import styles from './Movies.module.scss';
import FilterBadge from '../FilterBadge/FilterBadge';

const Movies = () => {
  const [movieList, setMovieList] = useState();
  const { filterValue } = useFilter();

  const breadcrumbItems = useMemo(() => ([
    { path: '/movies', name: 'Movies' }
  ]),[]);

  const getMovies = useCallback(async () => {
    try {
      const { movies, errors } = await getList(filterValue);
      if (errors) throw new Error(errors);
      setMovieList(movies);
    } catch (error) {
      console.log('Error getting list of movies', error);
      setMovieList([]);
    }
  }, [filterValue]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <>
      <div className={cn('list-group', styles.list)}>
        <div className="d-flex justify-content-between align-items-center">
          <Breadcrumb items={breadcrumbItems} />
          <Link className="btn btn-outline-primary" to="/movies/create">
            + Add
          </Link>
        </div>
        <FilterBadge />
        {movieList?.map(({ id, name, description, year, rating, image }) => (
          <Link
            key={id}
            to={`/movies/${id}`}
            className="list-group-item list-group-item-action d-flex flex-row flex-nowrap align-items-start"
          >
            <img
              src={`${process.env.REACT_APP_IMAGE_HOST_URL}/movies/${image}`}
              className={styles.image}
              alt={name}
            />
            <span className="flex-grow-1">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{name}</h5>
                <small className="text-muted">{rating}</small>
              </div>
              <p className={cn('mb-1', styles.description)}>{description}</p>
              <small className="text-muted">{year}</small>
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Movies;
