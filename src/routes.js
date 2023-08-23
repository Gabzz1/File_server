const {Router} = require('express');
const controller = require('./controller');

const router =  Router();

router.get('/', controller.getFiles);
router.get('/:id', controller.getFileById);

module.exports = router;