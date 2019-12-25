module.exports = app => {
const users = require("../controllers/user.controller.js");
    // Create a new user
    app.post("/users", users.create);

    // Update a user with userId
    app.put("/users/:userId", users.update);
};