module.exports = function(sequelize, DataTypes) {
    var burger = sequelize.define("Burger", {
        burger_name: DataTypes.STRING,
        devoured: DataTypes.BOOLEAN(false)

    });
    return burger;
}

var burger = {
    table: "burgers",

    selectAll: function(cb) {

        orm.selectAll(this.table, function(burgersData) {
            console.log(burgersData);
            cb(burgersData);
        });

    },

    insertOne: function(burger, cb) {
        orm.insertOne(this.table, burger, function(burgersData) {
            console.log(burgersData);
            cb(burgersData);
        });
    },

    updateOne: function(status, condition, cb) {
        orm.updateOne(this.table, { devoured: true }, condition, function(data) {
            cb(data);
        });
    }
};

module.exports = burger;
