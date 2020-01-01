const Platform = require("../models/platform.model.js");

// Get all Platforms
exports.getAll = (req, res) => {
    Platform.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "error occured while retrieving platforms."
            });
        else res.send(data);
    });
};

// Get supported Platform
exports.getPlatform = (req, res) => {
    Platform.getPlatforms(
        req.params.restaurantId,
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found platforms support restaurant with Id: ${req.params.restaurantId}`
                    });
                } else {
                    res.status(500).send({
                        message: "Error retrieving platforms with restaurantId : " + req.params.restaurantId
                    });
                }
            } else {
                res.send(data);
            }
        }
    );
};