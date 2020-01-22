var express = require("express");

var router = express.router();
var burger = require("../models/burgers.js");

router.get("/", function (req, res) {
    res.redirect("/burgers");
});
router.get("/burgers", function (req, res) {
    burger.all(function (burgerData) {
        res.render("index", { burger_data: burgerData })
    })
})