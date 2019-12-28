const sql = require("./db.js");

const PlatformActivity = function(pa) {
    this.discount_shippingFee = pa.discount_shippingFee;
    this.discountMode = pa.discountMode;
    this.discountParam = pa.discountParam;
    this.description = pa.description;
    this.pic_url = pa.pic_url;
};

PlatformActivity.getAll = result => {
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

module.exports = PlatformActivity;