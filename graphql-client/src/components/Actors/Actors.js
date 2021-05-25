import { useEffect, useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import Breadcrumb from '../Breadcrumb';
import { getList } from '../../lib/api/actors';
import { useFilter } from '../../hooks/useFilter';
import styles from './Actors.module.scss';
import FilterBadge from '../FilterBadge/FilterBadge';

const Actors = () => {
  const [actorList, setActorList] = useState();
  const { filterValue } = useFilter();

  const breadcrumbItems = useMemo(() => ([
    { path: '/actors', name: 'Actors' }
  ]),[]);

  const getActors = useCallback(async () => {
    try {
      const { actors, errors } = await getList(filterValue);
      if (errors) throw new Error(errors);
      setActorList(actors);
    } catch (error) {
      console.log('Error getting list of actors', error);
      setActorList([]);
    }
  }, [filterValue]);

  useEffect(() => {
    getActors();
  }, [getActors]);

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <FilterBadge />
      <div className={cn('list-group', styles.list)}>
        {actorList?.map(({ id, name, image, movies = [] }) => (
          <div
            key={id}
            className="list-group-item list-group-item-action align-items-start d-flex flex-row flex-nowrap"
          >
              <img
                src={`${process.env.REACT_APP_IMAGE_HOST_URL}/actors/${image}`}
                className={styles.image}
                alt={name}
              />
              <span>
                <div className="d-flex w-100 justify-content-between">
                  <Link
                    to={`/actors/${id}`}
                    className="text-decoration-none text-primary mb-3"
                  >
                    <h5 className="mb-1">{name}</h5>
                  </Link>
                </div>
                <p className="h6 text-muted">Movies:{' '}
                  {movies.map(({ id: movieId, name: movieName }) => (
                    <Link
                      key={movieId}
                      to={`/movies/${movieId}`}
                      className="text-decoration-none"
                    >
                      {movieName}
                    </Link>
                  ))}
                </p>
              </span>

          </div>
        ))}
      </div>
    </>
  );
}

export default Actors;
