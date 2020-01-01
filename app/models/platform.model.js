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

module.exports = Platform;