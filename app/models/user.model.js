const sql = require("./db.js");

// constructor
const User = function(user) {
  this.id = user.id;
  this.name = user.name;
  this.phone = user.phone;
  this.address = user.address;
  this.password = user.password;
  this.account = user.account;
};

User.create = (newUser, result) => {
  sql.query("INSERT INTO User SET ?", newUser, (err, res) => {
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
    "UPDATE User SET UName = ?, phone = ?, address = ? WHERE UID = ?",
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

User.Authenticate = (auth, result) => {
  sql.query("SELECT * from User WHERE account = ? and password = ?",
    [auth.account,auth.password],
    (err,res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.length == 0) {
        // not found user with the same account and password
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("get user: ", res[0]);
      result(null, res[0]);
    }
  );
};

module.exports = User;