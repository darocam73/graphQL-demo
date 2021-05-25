import { useEffect, useState, useMemo, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import Breadcrumb from '../Breadcrumb';
import { getMovie } from '../../lib/api/movies';

const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const { id } = useParams();

  const breadcrumbItems = useMemo(() => ([
    { path: '/movies', name: 'Movies' },
    { path: undefined, name: 'Details'}
  ]),[]);

  const getMovieData = useCallback(async () => {
    try {
      const { movie: movieData, errors } = await getMovie(id);
      if (errors) throw new Error(errors);
      setMovie(movieData);
    } catch (error) {
      console.log('Error getting movie', error);
      setMovie([]);
    }
  }, [id]);

  useEffect(() => {
    getMovieData();
  }, [getMovieData]);

  if (!movie) return null;

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className="row">
        <div className="col-7">
          <div className="d-flex justify-content-between">
            <p className="h3">{movie.name}</p>
            <Link className="btn btn-outline-primary" to={`/movies/edit/${id}`}>
              Edit
            </Link>
          </div>
          <p className="h6 mb-4">Rating: <strong>{movie.rating}</strong></p>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <img
            src={`${process.env.REACT_APP_IMAGE_HOST_URL}/movies/${movie.image}`}
            className="w-100"
            alt={movie.name}
          />
        </div>
        <div className="col-4">
          <p>
            <span className="text-muted h6">Genre:</span>
            <strong>{' '}
              <Link to={`/genres/${movie.genre?.id}`}>{movie.genre?.name}</Link>
            </strong>
          </p>
          <p className="text-muted h6">Description:</p>
          <p>{movie.description}</p>
          <p>
            <span className="text-muted h6">Duration:</span>
            <strong> {movie.duration} min</strong>
          </p>
          <p>
            <span className="text-muted h6">Year:</span>
            <strong> {movie.year}</strong>
          </p>
          <p className="text-muted h6">Cast:</p>
          {movie.actors?.map(({ id: actorId, name }) => (
            <Link
              key={actorId}
              to={`/actors/${actorId}`}
              className="d-block"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default MovieDetails;
