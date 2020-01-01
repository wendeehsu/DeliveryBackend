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