var express = require("express");

var app = express();

var PORT = process.env.PORT || 3000;

var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("APP listening on port: " + PORT);
  });
});
