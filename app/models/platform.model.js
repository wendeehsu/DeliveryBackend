const sql = require("./db.js");

const Platform = function(p) {
    this.id = p.id;
    this.name = p.name;
    this.url = p.url;
    this.fee = p.fee;
};

Platform.getAll = result => {
    sql.query("SELECT PID as id, PName as name, shippingFee, P_IMG_URL as pic_url FROM platform", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("platforms: ", res);
        result(null, res);
    });
};

Platform.getPlatforms = (restaurantId, result) => {
    sql.query(
        "select p.PID as id, p.PName as name, shippingFee from Restaurant as r, supportedPlatform as sp, platform as p where r.RID = sp.RID and sp.PID = p.PID and r.RID = ?",
        restaurantId,
        (err, res) => {
            if (err) {
              console.log("error: ", err);
              result(null, err);
              return;
            }

            if (res.affectedRows == 0) {
              // not found platform with the id
              result({ kind: "not_found" }, null);
              return;
            }

            console.log("res = ", res);
            result(null,res);
        }
    );
};

module.exports = Platform;