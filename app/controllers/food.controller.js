const Food = require("../models/food.model.js");

exports.get = (req,res) => {
    Food.get(
        req.params.restaurantId,
        (err,data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Food with restaurant id: ${req.params.restaurantId}`
                    });
                } else {
                    res.status(500).send({
                        message: "Error retrieving food with restaurantId: " + req.params.restaurantId
                    });
                }
            } else {
                res.send(data);
            }
        }
    )
};