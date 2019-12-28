const sql = require("./db.js");

// constructor
const Store = function(store) {
    this.id = store.id;
    this.name = store.name;
    this.address = store.address;
    this.pic_url = store.pic_url;
};

Store.getAll = result => {
    sql.query("SELECT * FROM Stores", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("stores: ", res);
        result(null, res);
    });
};

module.exports = Store;