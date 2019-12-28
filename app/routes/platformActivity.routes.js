module.exports = app => {
    const platformActivities = require("../controllers/platformActivity.controller.js");
    /**
     * @swagger
     * definitions:
     *   PlatformActivity:
     *     type: object
     *     required:
     *       - discount_shippingFee
     *       - discountMode
     *     properties:
     *       discount_shippingFee:
     *         type: integer
     *       discountMode:
     *         type: integer
     *       discountParam:
     *         type: float
     *       description:
     *         type: string
     *       pic_url:
     *         type: string
     */

    /**
     * @swagger
     * /platformActivities:
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
    app.get("/platformActivities", platformActivities.get);
};