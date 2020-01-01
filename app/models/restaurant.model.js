const sql = require("./db.js");

// constructor
const Restaurant = function(store) {
    this.id = store.id;
    this.name = store.name;
    this.address = store.address;
    this.pic_url = store.pic_url;
};

Restaurant.getAll = result => {
    sql.query("SELECT RID as id, RName as name, address, R_IMG_URL as pic_url FROM Restaurant", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("restaurants: ", res);
        result(null, res);
    });
};

Restaurant.getCategoryName = result => {
    sql.query("SELECT DISTINCT(CName) from RestaurantCategory", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        categories = []
        for(var i in res) {
            categories.push(res[i].CName);
        }
        console.log("categories: ", categories);
        result(null, categories);
    });
};

Restaurant.getCategories = (category, result) => {
    sql.query(
        "select RID as id, RName as name, address, R_IMG_URL as pic_url from Restaurant where RID in (select RID from RestaurantCategory where CName = ?)",
        category,
        (err, res) => {
            if (err) {
              console.log("error: ", err);
              result(null, err);
              return;
            }

            if (res.length == 0) {
              // not found user with the id
              result({ kind: "not_found" }, null);
              return;
            }

            console.log("category = ", category, " res = ", res);
            result(null,res);
        }
    );
};

module.exports = Restaurant;