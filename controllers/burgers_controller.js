var express = require('express');
var router = express.Router();
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var burgers = require('../models')['burgers'];
var db = require("../models")

router.get('/', function(req, res) {
    res.redirect('/burgers')
});


router.get('/burgers', function(req, res) {
    db.burgers.findAll({}).then(function(data) {
        var hbsObject = { burgers: data }
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post("/", function (req, res) {
   db.burgers.create({

        name: req.body.name

    }).then(function(){

        res.redirect('/burgers');
    });
});

router.put('/burgers/update/:id', function(req, res) {
    db.burgers.update({ eaten: req.body.eaten }, {
        fields: ['eaten'],
        where: { id: req.params.id }
    }).then(function(data) {
        res.redirect('/burgers')
    });
});

router.delete('/burgers/delete/:id', function(req,res){
    console.log("Hitting burger delete route")

    var condition = "id = " + req.params.id;

     db.burgers.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(){

        res.redirect('/burgers');
    });

});

module.exports = router;