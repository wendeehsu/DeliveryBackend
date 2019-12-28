const sql = require("./db.js");

// constructor
const User = function(user) {
  this.name = user.name;
  this.phone = user.phone;
  this.address = user.address;
  this.password = user.password;
  this.account = user.account
};

User.create = (newUser, result) => {
  sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created user: ", { id: res.insertId, ...newUser });
    result(null, { id: res.insertId, ...newUser });
  });
};

User.updateById = (id, user, result) => {
  sql.query(
    "UPDATE users SET name = ?, phone = ?, address = ? WHERE uid = ?",
    [user.name, user.phone, user.address, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found user with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated user: ", { id: id, ...user });
      result(null, { id: id, ...user });
    }
  );
};

module.exports = User;