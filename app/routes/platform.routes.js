module.exports = app => {
    const platform = require("../controllers/platform.controller.js");
    /**
     * @swagger
     * definitions:
     *   Platform:
     *     type: object
     *     required:
     *       - id
     *     properties:
     *       id:
     *         type: integer
     *       name:
     *         type: string
     *       url:
     *         type: string
     *       fee:
     *         type: integer
     *   PlatformActivity:
     *     type: object
     *     required:
     *       - pid
     *       - discount_shippingFee
     *       - discountMode
     *     properties:
     *       pid:
     *         type: integer
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
     * /platforms:
     *   get:
     *     tags:
     *       -  Platform
     *     description: Returns all platforms
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: An array of platforms
     *         schema:
     *           $ref: '#/definitions/Platform'     
     */
    app.get("/platforms", platform.getAll);

    /**
     * @swagger
     * /platform/Activities:
     *   get:
     *     tags:
     *       -  Platform
     *     description: Returns all platformActivities
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: An array of puppies
     *         schema:
     *           $ref: '#/definitions/PlatformActivity'     
     */
    app.get("/platform/Activities", platform.getAllActivities);
};