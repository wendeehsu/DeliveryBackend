const sql = require("./db.js");

// constructor
const Restaurant = function(store) {
    this.id = store.id;
    this.name = store.name;
    this.address = store.address;
    this.pic_url = store.pic_url;
};

Restaurant.getAll = result => {
    sql.query("SELECT * FROM Restaurant", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("restaurants: ", res);
        result(null, res);
    });
};

module.exports = Restaurant;