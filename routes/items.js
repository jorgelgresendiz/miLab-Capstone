const express = require('express');
const router = express.Router();
const itemCtrl = require('../controllers/items');

//Full CRUD for item model

//create a new item
router.post('/', itemCtrl.create);

//view a single card
router.get('/', itemCtrl.index);

//delete a single card
router.delete('/:id', itemCtrl.delete);

//update a single card
router.put('/:id', itemCtrl.update);

module.exports = router;