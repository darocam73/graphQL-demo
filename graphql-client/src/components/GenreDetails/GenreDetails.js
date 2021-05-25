import { useEffect, useState, useMemo, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../Breadcrumb';
import { getGenre } from '../../lib/api/genres';

const GenreDetails = () => {
  const [genre, setGenre] = useState();
  const { id } = useParams();

  const breadcrumbItems = useMemo(() => ([
    { path: '/genres', name: 'Genres' },
    { path: undefined, name: 'Details'}
  ]),[]);

  const getGenreData = useCallback(async () => {
    try {
      const { genre: genreData, errors } = await getGenre(id);
      if (errors) throw new Error(errors);
      setGenre(genreData);
    } catch (error) {
      console.log('Error getting genre data', error);
      setGenre([]);
    }
  }, [id]);

  useEffect(() => {
    getGenreData();
  }, [getGenreData]);

  if (!genre) return null;

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className="row">
        <div className="col">
          <p className="h3">
            {genre.name}
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <p>{genre.description}</p>
        </div>
      </div>
    </>
  );
}

export default GenreDetails;
