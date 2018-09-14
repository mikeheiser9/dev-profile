const db = require("../models");
const mysql = require("mysql");

module.exports = function (app) {
    app.post("/api/contact", function (req, res) {
        console.log(req.body);
        db.contact.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            phone: req.body.phone,
            message: req.body.message
            })
            .then(function (dbPost) {
                console.log(dbPost);
                res.json(dbPost);
            });
    });
};