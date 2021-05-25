const errorRes = (messages) => ({
  errors: messages.map(error => ({ message: error }))
});

const checkMissingFields = (body = {}, fields = []) => {
  const missingFields = fields.reduce((acc, cur) => {
    return [
      ...acc,
      ...(body[cur] ? [] : [cur])
    ]
  }, []);
  return missingFields;
}

module.exports = { checkMissingFields, errorRes };
