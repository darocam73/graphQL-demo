import { useEffect, useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import Breadcrumb from '../Breadcrumb';
import { getList } from '../../lib/api/genres';
import { useFilter } from '../../hooks/useFilter';
import styles from './Genres.module.scss';
import FilterBadge from '../FilterBadge/FilterBadge';

const Genres = () => {
  const [genreList, setGenreList] = useState();
  const { filterValue } = useFilter();
  
  const breadcrumbItems = useMemo(() => ([
    { path: '/genres', name: 'Genres' }
  ]),[]);

  const getGenres = useCallback( async () => {
    try {
      const { genres, errors } = await getList(filterValue);
      if (errors) throw new Error(errors);
      setGenreList(genres);
    } catch (error) {
      console.log('Error getting list of genres', error);
      setGenreList([]);
    }
  }, [filterValue]);

  useEffect(() => {
    getGenres();
  }, [getGenres]);

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <FilterBadge />
      <div className={cn('list-group', styles.list)}>
        {genreList?.map(({ id, name }) => (
          <Link
            key={id}
            to={`/genres/${id}`}
            className="list-group-item list-group-item-action align-items-start flex-column"
          >
            <h5 className="mb-1">{name}</h5>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Genres;
