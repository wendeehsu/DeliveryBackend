const PlatformActivity = require("../models/platformActivity.model.js");

// Get all PlatformActivities
exports.getAll = (req, res) => {
    PlatformActivity.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "error occured while retrieving platform activities."
            });
        else res.send(data);
    });
};