const Transaction = require("../models/transaction.model.js");

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Transaction
    const transaction = new Transaction({
        UID: req.body.userId,
        RID: req.body.restaurantId,
        PID: req.body.platformId,
        TransactionFoods: req.body.foods,
        totalPrice: req.body.totalPrice,
        getDiscount: req.body.getDiscount
    });
  
    // Save Customer in the database
    Transaction.create(transaction, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the transaction."
        });
      else res.send(data);
    });
};