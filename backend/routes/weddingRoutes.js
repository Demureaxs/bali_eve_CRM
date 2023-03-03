const express = require('express');
const router = express.Router();

const {
  getWeddings,
  getWedding,
  createWedding,
  updateWedding,
  deleteWedding,
} = require('../controllers/weddingsController');

router.get('/', getWeddings);
router.post('/', createWedding);
router.get('/:id', getWedding);
router.put('/:id', updateWedding);
router.delete('/:id', deleteWedding);

module.exports = router;
