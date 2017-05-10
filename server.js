// Dependencies
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var db = require("./models");

//Initialize & store new Express app
var port = process.env.NODE_ENV || 3000;
var app = express();

//Configure body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/json' }));

//Configure method-override middleware
app.use(methodOverride("_method"));

//Configure express-handlebars view engine
app.engine("handlebars", exphbs({
    defaultLayout: "main",
}));

app.set("view engine", "handlebars");

//Static assets
//app.use('/public', express.static('./app/public/'));
app.use(express.static(process.cwd() + '/public'));
//Route controllers
require("./controllers/burgers_controller")(app);

//Start listening
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("Listening on port %s", PORT);
    });
});
