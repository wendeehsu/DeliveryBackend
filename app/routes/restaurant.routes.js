module.exports = app => {
    const restaurants = require("../controllers/restaurant.controller.js");
    /**
     * @swagger
     * definitions:
     *   Restaurant:
     *     type: object
     *     required:
     *       - id
     *     properties:
     *       id:
     *         type: integer
     *       name:
     *         type: string
     *       address:
     *         type: string
     *       pic_url:
     *         type: string
     */

    /**
     * @swagger
     * /restaurants:
     *   get:
     *     tags:
     *       -  Restaurant
     *     description: Returns all restaurants
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: An array of restaurants
     *         schema:
     *           $ref: '#/definitions/Restaurant'     
     */
    app.get("/restaurants", restaurants.get);
};