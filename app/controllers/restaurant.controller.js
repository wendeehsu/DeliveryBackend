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

// Get all categories
exports.getCategoryName = (req,res) => {
    Restaurant.getCategoryName((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "error occured while retrieving categories."
            });
        else res.send(data);
    });
};

// Get restaurant by category
exports.getCategory = (req,res) => {
    Restaurant.getCategories(
        req.params.categoryName,
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found restaurant with category: ${req.params.categoryName}`
                    });
                } else {
                    res.status(500).send({
                        message: "Error retrieving with category " + req.params.categoryName
                    });
                }
            } else {
                res.send(data);
            }
        }
    );
};