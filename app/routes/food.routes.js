module.exports = app => {
    const Food = require("../controllers/food.controller.js");
    /**
     * @swagger
     * definitions:
     *   Food:
     *     type: object
     *     required:
     *       - restaurantId
     *       - id
     *     properties:
     *       restaurantId:
     *         type: integer
     *       id:
     *         type: integer
     *       name:
     *         type: string
     *       price:
     *         type: integer
     *       pic_url:
     *         type: string   
     */ 

    /**
     * @swagger
     * /foods/{restaurantId}:
     *   get:
     *     tags:
     *       -  Food
     *     description: get restaurant's foods
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: restaurantId
     *         in:  path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: foods
     *         schema:
     *           $ref: '#/definitions/Food'
     */
    app.get("/foods/:restaurantId", Food.get);
};