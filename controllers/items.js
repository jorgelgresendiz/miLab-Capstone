const Item = require('../models/item');

module.exports = {
    create,
    index,
    delete: deleteItem,
    update
};

//create an item
async function create(req, res) {
    const item = await Item.create(req.body);
    res.status(201).json(item)
}

//view all items
async function index(req, res) {
    try {
        const items = await Item.find({});
        res.status(200).json(items);
    }
    catch (err) {
        res.json({ err });
    }
}

//delete a single item
async function deleteItem(req, res) {
    try {
        await Item.findByIdAndDelete(req.params.id);
    }
    catch (err) {
        res.json({ err });
    }
}

//update a single item
async function update(req, res) {
    try {
        await Item.findByIdAndUpdate(req.params.id, req.body);
    }
    catch (err) {
        res.json({ err });
    }

}