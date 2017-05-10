//Dependencies
var connection = require("./connection");

var orm = {
    selectAll: function(tableName, callBack) {
        var queryString = "SELECT * FROM " + tableName;
        connection.query(queryString, function(err, data) {
            if (err) {
                console.log("error:" + err.stack);
            }
            callBack(data);
        })
    },
    insertOne: function(tableName, obj, callBack) {
        var queryString = "INSERT INTO " + tableName + " SET ?";
        connection.query(queryString, obj, function(err, data) {
            if (err) {
                console.log("error:" + err.stack);
            } else

                callBack(data);
        });
    },


    updateOne: function(tableName, status, condition, cb) {
        var queryString = "UPDATE " + tableName + " SET `devoured`= 1 WHERE ?";
        console.log(queryString);
        connection.query(queryString, [condition], function(err, data) {
            if (err) {

                console.log("error:" + err.stack);
            } else
                cb(data);
        });

    },

    delete(tableName, condition, cb) {
        var queryString = "DELETE FROM" + tableName + "WHERE ?";
        connection.query(queryString, condition, function(err, data) {
            if (err) {
                console.log("error:" + err.stack);
            } else
                cb(data);
        });
    }
};

module.exports = orm;
