module.exports = app => {
    const stores = require("../controllers/store.controller.js");
    /**
     * @swagger
     * definitions:
     *   Store:
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
     * /stores:
     *   get:
     *     tags:
     *       -  Store
     *     description: Returns all stores
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: An array of stores
     *         schema:
     *           $ref: '#/definitions/Store'     
     */
    app.get("/stores", stores.get);
};