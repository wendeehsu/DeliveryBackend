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
     *   Category:
     *     type: object
     *     required:
     *       - id
     *     properties:
     *       id:
     *         type: integer
     *       name:
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

    /**
     * @swagger
     * /categories:
     *   get:
     *     tags:
     *       -  Restaurant
     *     description: Returns all restaurant categories
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: An array of categories   
     */
    app.get("/categories", restaurants.getCategoryName);

    /**
     * @swagger
     * /restaurants/{categoryName}:
     *   get:
     *     tags:
     *       -  Restaurant
     *     description: get Restaurant with given categoryName
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: categoryName
     *         in:  path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Restaurants
     *         schema:
     *           $ref: '#/definitions/Restaurant'
     */
    app.get("/restaurants/:categoryName", restaurants.getCategory);
};