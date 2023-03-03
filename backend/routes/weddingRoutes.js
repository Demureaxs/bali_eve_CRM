// required modules
const express = require('express');
const router = express.Router();

// requiring in the wedding controllers
const {
  getWeddings,
  getWedding,
  createWedding,
  updateWedding,
  deleteWedding,
} = require('../controllers/weddingsController');

// routes and the wedding controllers to handle them
router.get('/', getWeddings);
router.post('/', createWedding);
router.get('/:id', getWedding);
router.put('/:id', updateWedding);
router.delete('/:id', deleteWedding);

// exporting the router
module.exports = router;
