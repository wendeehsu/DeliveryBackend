module.exports = app => {
    const transactions = require("../controllers/transaction.controller.js");
    /**
     * @swagger
     * definitions:
     *   Transaction:
     *     type: object
     *     required:
     *       - userId
     *       - restaurantId
     *       - platformId
     *       - totalPrice
     *     properties:
     *       userId:
     *         type: integer
     *       restaurantId:
     *         type: integer
     *       platformId:
     *         type: integer
     *       foods:
     *         type: array
     *         items:
     *           type: object
     *           minItems: 1
     *           required:
     *              - id
     *           properties:
     *              id:
     *                type: integer     
     *              num:
     *                type: integer
     *       totalPrice:
     *         type: integer
     *       getDiscount:
     *         type: integer 
     * 
     *   TransactionFood:
     *     type: object
     *     required:
     *       - transactionId
     *       - restaurantId
     *       - foodId
     *     properties:
     *       transactionId:
     *         type: integer
     *       restaurantId:
     *         type: integer
     *       foodId:
     *         type: integer
     *       number:
     *         type: integer     
     */    

    /**
     * @swagger
     * /transaction:
     *   post:
     *     tags:
     *       -  Transaction
     *     description: create Transaction
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: user
     *         description: Transaction object
     *         in:  body
     *         required: true
     *         type: string
     *         schema:
     *           $ref: '#/definitions/Transaction'
     *     responses:
     *       200:
     *         description: Transactions
     *         schema:
     *           $ref: '#/definitions/Transaction'
     */
    app.post("/transaction",transactions.create);

    /**
     * @swagger
     * /transactions/{userId}:
     *   get:
     *     tags:
     *       -  Transaction
     *     description: get Transaction
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: userId
     *         in:  path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: Transactions
     */
    app.get("/transactions/:userId", transactions.get);
};