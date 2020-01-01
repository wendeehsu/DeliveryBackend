module.exports = app => {
    const platformActivity = require("../controllers/platformActivity.controller.js");
    /**
     * @swagger
     * definitions:
     *   PlatformActivity:
     *     type: object
     *     required:
     *       - platformId
     *       - id
     *     properties:
     *       platformId:
     *         type: integer
     *       id:
     *         type: integer
     *       name:
     *         type: string
     *       discount_shippingFee:
     *         type: integer
     *       FoodDiscountMode:
     *         type: integer
     *       FDM_arg1:
     *         type: float
     *       FDM_arg2:
     *         type: float
     *       description:
     *         type: string
     *       pic_url:
     *         type: string
     *       start_time:
     *         type: time
     *       end_time:
     *         type: time
     */

    /**
     * @swagger
     * /activities:
     *   get:
     *     tags:
     *       -  PlatformActivity
     *     description: Returns all platformActivities
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: An array of puppies
     *         schema:
     *           $ref: '#/definitions/PlatformActivity'     
     */
    app.get("/activities", platformActivity.getAll);
};