import { useEffect, useState, useMemo, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import moment from 'moment';
import Breadcrumb from '../Breadcrumb';
import { getActor } from '../../lib/api/actors';

const ActorDetails = () => {
  const [actor, setActor] = useState();
  const { id } = useParams();

  const breadcrumbItems = useMemo(() => ([
    { path: '/actors', name: 'Actors' },
    { path: undefined, name: 'Details'}
  ]),[]);

  const getActorData = useCallback(async () => {
    try {
      const { actor: actorData, errors } = await getActor(id);
      if (errors) throw new Error(errors);
      setActor(actorData);
    } catch (error) {
      console.log('Error getting actor data', error);
      setActor([]);
    }
  }, [id]);

  const actorAge = useMemo(() => {
    if (!actor) return 0;
    return moment().diff(moment(actor.birthday, 'YYYYMMDD'), 'years');
  }, [actor]);

  useEffect(() => {
    getActorData();
  }, [getActorData]);

  if (!actor) return null;

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className="row">
        <div className="col">
          <p className="h3">
            {actor.name}
          </p>
          <p>age {actorAge}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <img
            src={`${process.env.REACT_APP_IMAGE_HOST_URL}/actors/${actor.image}`}
            className="w-100"
            alt={`${actor.name} cover`}
          />
        </div>
        <div className="col-4">
          <p className="text-muted h6">Biography:</p>
          <p>{actor.bio}</p>
          <p>
            <span className="text-muted h6">Birthday:</span>
            <strong> {moment(actor.birthday).format('MMMM Do YYYY')}</strong>
          </p>
          <p className="text-muted h6">Movies:</p>
          {actor.movies?.map(({ id: movieId, name }) => (
            <Link
              key={movieId}
              to={`/movies/${movieId}`}
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

export default ActorDetails;
