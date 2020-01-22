const express = require('express');
const router = express.Router();
const itemCtrl = require('../controllers/items');

//Full CRUD for item model

//view all items
router.get('/', itemCtrl.index)

// //view a single item
// router.get('/:id', itemCtrl.show);

//create a new item
router.post('/', itemCtrl.create);

//delete a single card
router.delete('/:id', itemCtrl.delete);

//update a single card
router.put('/:id', itemCtrl.update);

module.exports = router;