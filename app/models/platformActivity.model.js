const sql = require("./db.js");

const PlatformActivity = function(pa) {
    this.pid = pa.pid;
    this.id = pa.id;
    this.name = pa.name;
    this.discount_shippingFee = pa.discount_shippingFee;
    this.discountMode = pa.discountMode;
    this.discountParam1 = pa.discountParam1;
    this.discountParam2 = pa.discountParam2;
    this.description = pa.description;
    this.pic_url = pa.pic_url;
    this.startTime = pa.startTime;
    this.endTime = pa.endTime;
};

PlatformActivity.getAll = result => {
    sql.query(
        "SELECT PID as platformId, PA_ID as id, PA_Name as name, discount_shippingFee, FoodDiscountMode, FDM_arg1, FDM_arg2, description, P_ACT_IMG_URL as pic_url, start_time, end_time FROM platform_activity", 
        (err, res) => {
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