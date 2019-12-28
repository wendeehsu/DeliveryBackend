const sql = require("./db.js");

const PlatformActivity = function(pa) {
    this.discount_shippingFee = pa.discount_shippingFee;
    this.discountMode = pa.discountMode;
    this.discountParam = pa.discountParam;
    this.description = pa.description;
    this.pic_url = pa.pic_url;
};

const Platform = function(p) {
    this.id = p.id;
    this.name = p.name;
    this.url = p.url;
    this.fee = p.fee;
};

Platform.getAll = result => {
    sql.query("SELECT * FROM platforms", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("platforms: ", res);
        result(null, res);
    });
};

Platform.getAllActivities = result => {
    sql.query("SELECT * FROM platform_Activities", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("platform_Activities: ", res);
        result(null, res);
    });
};

module.exports = Platform;