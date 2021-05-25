import { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import cn from 'classnames';
import Required from '../common/Required';
import ImageUploader from '../common/ImageUploader';
import Breadcrumb from '../Breadcrumb';
import { getFormData, createMovie, editMovie, removeImage } from '../../lib/api/movies';
import styles from './MovieForm.module.scss';

const MovieForm = () => {
  const { id } = useParams();
  const history = useHistory();
  const { register, setValue, watch, handleSubmit, formState: { errors } } = useForm();
  const [genres, setGenres] = useState();
  const [tempImage, setTempImage] = useState();

  const breadcrumbItems = useMemo(() => ([
    { path: '/movies', name: 'Movies' },
    { path: undefined, name: id ? 'Edit' : 'New' }
  ]), [id]);

  const handleRemoveImage = useCallback(async () => {
    if (tempImage) {
      setTempImage(undefined);
      return;
    }
    try {
      const status = await removeImage({ id });
      if (status) setValue('image', '');
    } catch (error) {
      console.error('Error tying to remove the image', error);
    }
  }, [id, setValue, tempImage]);

  const loadFormData = useCallback(async () => {
    try {
      const { genres: genresList, movie, errors } = await getFormData(id);
      if (errors) throw new Error(errors);
      setGenres(genresList);
      setValue('name', movie?.name || '');
      setValue('rating', movie?.rating || '');
      setValue('genreId', movie?.genre?.id || '');
      setValue('description', movie?.description || '');
      setValue('duration', movie?.duration || '');
      setValue('image', movie?.image || '');
      setValue('year', movie?.year || new Date().getFullYear());
    } catch (error) {
      console.error('Error loading form data', error);
      setGenres(undefined);
    }
  }, [id, setValue]);

  const onSubmit = useCallback(async (formData) => {
    try {
      const input = {
        ...formData,
        rating: Math.round(formData.rating * 10) / 10,
        ...(id && { id }),
        image: formData.image || tempImage || '',
      }
      const action = id ? editMovie : createMovie;
      const { movie: { id: newId } = {} } = await action(input);
      if (newId || id) {
        history.push(`/movies/${newId || id}`);
      }
    } catch (error) {
      console.error('error', error);
    }
  }, [history, id, tempImage]);

  useEffect(() => {
    loadFormData();
  }, [loadFormData]);

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className={cn('list-group', styles['form-container'])}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label w-100">
              Name
              <Required />
              <input
                defaultValue={watch('name') || ''}
                type="text"
                className="form-control"
                {...register('name', { required: 'The name is required' })}
              />
            </label>
            {errors.name && <div className="text-danger">{errors.name.message}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">
              Rating
              <Required />
              <input
                defaultValue={watch('rating') || ''}
                type="text"
                className="form-control"
                {...register('rating', {
                  required: 'You must enter a rating value',
                  max: {
                    value: 10,
                    message: 'This value should be 10 or lower'
                  },
                  min: {
                    value: 0,
                    message: 'This value should be 0 or greater'
                  }
                })}
              />
            </label>
            {errors.rating && <div className="text-danger">{errors.rating.message}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">
              Genre
              <Required />
              {genres ? (
                <select
                  value={watch('genreId')}
                  className="form-select"
                  {...register('genreId', { required: 'Genre is required' })}
                >
                  <option value="" disabled>Select a genre</option>
                  {genres?.map(({ id, name }) => (
                    <option key={id} value={id}>{name}</option>
                  ))}
                </select>
              ) : (
                <span className="d-block spinner-border spinner-border-sm" />
              )}
            </label>
            {errors.genre && <div className="text-danger">{errors.genre.message}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label w-100">
              Description
              <Required />
              <textarea
                defaultValue={watch('description') || ''}
                className="form-control"
                rows="3"
                {...register('description', { required: 'Enter the description' })}
              />
            </label>
            {errors.description && <div className="text-danger">{errors.description.message}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">
              Duration (min)
              <Required />
              <input
                defaultValue={watch('duration') || ''}
                type="number"
                className="form-control"
                {...register('duration', {
                  required: 'You must enter a duration value',
                  min: {
                    value: 1,
                    message: 'This value should be 1 or greater'
                  },
                  setValueAs: v => parseInt(v),
                })}
              />
            </label>
            {errors.rating && <div className="text-danger">{errors.rating.message}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">
              Year
              <Required />
              <input
                type="number"
                className="form-control"
                defaultValue={watch('year') || ''}
                {...register('year', {
                  required: 'This field is required',
                  max: {
                    value: new Date().getFullYear(),
                    message: 'This year is not valid'
                  }
                })}
              />
            </label>
            {errors.year && <div className="text-danger">{errors.year.message}</div>}
          </div>
          <ImageUploader
            image={watch('image') ? `movies/${watch('image')}` : undefined}
            tempImage={tempImage}
            onSaveImage={(filename) => setTempImage(filename)}
            onRemove={handleRemoveImage}
          />
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    </>
  );
}

export default MovieForm;
