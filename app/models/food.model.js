const sql = require("./db.js");

// constructor
const Food = function(food) {
    this.restaurantId = food.restaurantId;
    this.id = food.id;
    this.name = food.name;
    this.price = food.price;
    this.pic_url = food.pic_url;
};

Food.get = (resId, result) => {
    sql.query(
        "select rid as restaurantId, FID as id, FName as name, price, F_IMG_URL as pic_url from Food where RID = ?",
        resId,
        (err, res) => {
            if (err) {
              console.log("error: ", err);
              result(null, err);
              return;
            }

            if (res.length == 0) {
              // not found Food with the restaurant id
              result({ kind: "not_found" }, null);
              return;
            }

            result(null,res);
        }
    );
};

module.exports = Food;