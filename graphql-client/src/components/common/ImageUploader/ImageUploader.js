import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { uploadFile } from '../../../lib/api/common';
import styles from './ImageUploader.module.scss';

const ImageUploader = ({ image, tempImage, onSaveImage, onRemove }) => {
  const [progress, setProgress] = useState(undefined);
  const [ajax, setAjax] = useState();
  const [file, setFile] = useState();
  const fileChooser = useRef();

  const handleSelectFile = (e) => {
    e.preventDefault();
    fileChooser.current?.click();
  }

  const onFileChange = ({ target }) => {
    const { files } = target;
    setFile(files[0]);
  }

  const onAbort = () => {
    setProgress(undefined);
    setFile(undefined);
    fileChooser.current.value = '';
  };

  const handleCancelUpload = useCallback((e) => {
    e.preventDefault();
    ajax?.abort();
    onAbort();
  }, [ajax]);

  const handleRemoveImage = useCallback((e) => {
    e.preventDefault();
    onRemove();
  }, [onRemove]);

  const onUploadProgress = ({ loaded, total }) => {
    setProgress(Math.round((100 * loaded) / total));
  };

  const onLoad = useCallback(({ target }) => {
    onAbort();
    const { response } = target;
    if (response) {
      try {
        const { filename } = JSON.parse(response);
        if (!filename) throw new Error('No file in response');
        onSaveImage(filename);
      } catch (error) {
        console.error('Error loading image data', error);
      }
    }
  }, [onSaveImage]);

  const onError = useCallback((error) => {
    console.error('Error uploading file: ', error);
    onAbort();
  }, []);

  const handleUploadFiles = useCallback(async (e) => {
    if (!file) return;

    setProgress(0);
    const ajaxResponse = await uploadFile({
      file,
      onUploadProgress,
      onLoad,
      onError,
      onAbort,
    });
    setAjax(ajaxResponse);
  }, [file, onError, onLoad]);

  const imageUrl = useMemo(() => {
    if(!image) return undefined;
    return `${process.env.REACT_APP_IMAGE_HOST_URL}/${image}`;
  }, [image]);

  const tempImageUrl = useMemo(() => {
    if (!tempImage) return undefined;
    return `${process.env.REACT_APP_TEMP_IMAGE_HOST_URL}/${tempImage}`
  }, [tempImage]);

  useEffect(() => {
    handleUploadFiles();
  }, [handleUploadFiles]);

  return (
    <div className="mb-3">
      <label className="form-label">
        Cover Image
        {imageUrl || tempImageUrl ? (
          <div className={styles['image-container']}>
            <img src={imageUrl || tempImageUrl} className={styles.image} alt={image} />
            <button
              type="button"
              className="btn btn-light"
              onClick={handleRemoveImage}
            >
              Remove image
            </button>
          </div>
        ) : (
          <>
            <input
              type="file"
              onChange={onFileChange}
              ref={fileChooser}
              className={styles['input-file']}
              accept=".png, .jpg, .jpeg"
            />
            {file && typeof progress !== 'undefined' ? (
              <div className="d-flex align-items-center">
                <div className="progress d-flex flex-grow-1">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-valuenow={progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <button
                  type="button"
                  className="btn-close d-inline-block"
                  onClick={handleCancelUpload}
                />
              </div>
            ) : (
              <button
                type="button"
                className="btn btn-light d-block"
                onClick={handleSelectFile}
              >
                Upload image
              </button>
            )}
          </>
        )}
      </label>
    </div>
  )
}

export default ImageUploader;
