/* -- HTTP request -- */
export const uploadFile = async ({
  file = '',
  method = 'POST',
  onUploadProgress = () => {},
  onLoad = () => {},
  onError = () => {},
  onAbort = () => {},
}) => {
  const formData = new FormData();
  formData.append('file', file);

  const ajax = new XMLHttpRequest();
  ajax.upload.addEventListener('progress', onUploadProgress, false);
  ajax.addEventListener('load', onLoad, false);
  ajax.addEventListener('error', onError, false);
  ajax.addEventListener('abort', onAbort, false);
  ajax.open(method, process.env.REACT_APP_UPLOAD_URL, true);

  ajax.send(formData);
  return ajax;
};
