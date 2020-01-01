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
     *       pic_url:
     *         type: string
     *       shippingFee:
     *         type: integer
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
     * /platforms/{restaurantId}:
     *   get:
     *     tags:
     *       -  Platform
     *     description: get Platform with given restaurantId
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: restaurantId
     *         in:  path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Restaurants
     */
    app.get("/platforms/:restaurantId", platform.getPlatform);
};