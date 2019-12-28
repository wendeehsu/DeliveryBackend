const Store = require("../models/store.model.js");

// Get all Stores
exports.get = (req, res) => {
    Store.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "error occured while retrieving stores."
            });
        else res.send(data);
    });
};