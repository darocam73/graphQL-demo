var express = require('express');
var router = express.Router();
var { errorRes } = require('../utils');

router.post('/', async (req, res, next) => {
  const {
    files: { file } = {},
  } = req;

  if(!file)
    return res.status(404).send(errorRes(['No file uploaded']));

  try {
    const filename = `${new Date().getTime()}-${file.name}`;
    file.mv(`./public/images/temp/${filename}`);
    res.status(200).send({ filename });
  } catch (error) {
    console.error('Error uploading file...');
    res.status(500).send(errorRes(['Error uploading file...']));
  }
});

module.exports = router;
