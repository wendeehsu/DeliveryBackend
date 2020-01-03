const sql = require("./db.js");

// constructor
const Transaction = function(t) {
    this.UID = t.UID;
    this.RID = t.RID;
    this.PID = t.PID;
    this.TransactionFoods = t.TransactionFoods;
    this.totalPrice = t.totalPrice;
    this.getDiscount = t.getDiscount;
};

Transaction.create = (newTrans, result) => {
    var time = new Date();
    time = time - time.getTimezoneOffset() * 60 * 1000;
    var formattedTime = new Date(time).toISOString().slice(0, 19).replace('T', ' ');
    sql.query("INSERT INTO Transaction SET `UID` = ?, `RID` = ?, `PID` = ?, `totalPrice` = ?, `getDiscount` = ?, `time` = ?",
     [newTrans.UID, newTrans.RID, newTrans.PID, newTrans.totalPrice, newTrans.getDiscount, formattedTime],
     (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
        
        // insert details
        console.log("created Transaction: ", { id: res.insertId, ...newTrans });
        result(null, { id: res.insertId, ...newTrans });
      });
};

module.exports = Transaction;