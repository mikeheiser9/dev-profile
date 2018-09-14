const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

const bodyParser = require("body-parser");
const db = require("./models");



// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build"));
}

app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// require("./routes/api-routes.js")(app);

app.post("/contact", function (req, res) {
  console.log(req.body.first_name);
  db.personalcontact.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message
      })
      .then(function (dbPost) {
          res.json(dbPost);
      })
      .catch(err=>{
        console.log(err);
      })
});

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync().then(function() {
  var server = app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });
});