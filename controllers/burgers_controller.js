// Dependencies
var burger = require("../models/burger");

module.exports = function(app) {
    //Route to dispaly all burgers
    app.get("/", function(req, res) {
        burger.selectAll(function(data) {
            console.log(data);
            res.render("index", { burgers: data });
        });

    });
    //Route to insert a new burger
    app.post("/", function(req, res) {
        var burger2 = {
            burger_name: req.body.burger
        };
        console.log("Body:", burger);
        burger.insertOne(burger2, function(data) {
            res.redirect("/");
        });

    });
    //Route to update a burger 
    app.put("/:id", function(req, res) {
        var status = req.body.devoured;
        var condition = {
            id: req.params.id
        }
        burger.updateOne(status, condition, function(data) {
            res.redirect("/");
        });
    });
};
