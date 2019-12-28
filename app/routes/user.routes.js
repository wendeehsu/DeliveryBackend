module.exports = app => {
    const users = require("../controllers/user.controller.js");
    /**
     * @swagger
     * definitions:
     *   User:
     *     type: object
     *     required:
     *       - account
     *       - password
     *     properties:
     *       name:
     *         type: string
     *       phone:
     *         type: string
     *       address:
     *         type: string
     *       password:
     *         type: string
     *       account:
     *         type: string
     */    

    /**
     * @swagger
     * /users:
     *   post:
     *     tags:
     *       -  User
     *     description: create user
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: user
     *         description: User object
     *         in:  body
     *         required: true
     *         type: string
     *         schema:
     *           $ref: '#/definitions/User'
     *     responses:
     *       200:
     *         description: users
     *         schema:
     *           $ref: '#/definitions/User'
     */
    app.post("/users", users.create);

    /**
     * @swagger
     * /users/{id}:
     *   put:
     *     tags:
     *       -  User
     *     description: update user
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: id
     *         in:  path
     *         required: true
     *         type: string
     *       - name: user
     *         description: User object
     *         in:  body
     *         required: true
     *         type: string
     *         schema:
     *           $ref: '#/definitions/User'
     *     responses:
     *       200:
     *         description: users
     *         schema:
     *           $ref: '#/definitions/User'
     */
    app.put("/users/:userId", users.update);
};