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
};