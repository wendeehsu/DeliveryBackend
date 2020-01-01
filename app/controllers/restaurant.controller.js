const Restaurant = require("../models/restaurant.model.js");

// Get all Stores
exports.get = (req, res) => {
    Restaurant.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "error occured while retrieving restaurants."
            });
        else res.send(data);
    });
};