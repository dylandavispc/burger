// DEPENDENCIES
const express = require("express");

const router = express.Router();

// Import model (burger.js)
const burger = require("../models/burger.js");



// ROUTING AND LOGIC

// GET
router.get("/", function( req, res ) {
    burger.all(function(data) {
        let hbsObject = {
        burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// POST
router.post("/api/burgers", function(req, res) {
    burger.create([
        "name", "img", "eaten"
    ], 
    [
        req.body.name, req.body.img, req.body.eaten
    ], 
    function(result) {
        res.json({ id: result.insertId 
    });
    });
});

// PUT
router.put("/api/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        eaten: req.body.eaten
    }, condition, function(result) {
        if (result.changedRows ==0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;

    burger.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


//EXPORT

module.exports = router;