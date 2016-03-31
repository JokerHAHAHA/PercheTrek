// MODEL BIKE
var mongoose = require('mongoose');


var bikeSchema = new mongoose.Schema({
    name: String,
    length: Number,
    time: Number,
    geo: [{
        longitude: String,
        latitude: String,
        namepoint: String,
        duration: Number
    }]
});

var Bike = {

    model: mongoose.model('Bike', bikeSchema),

    create: function(req, res) {
        Bike.model.create(req.body.bike, function() {
            res.sendStatus(200);
        });
    },

    findAll: function(req, res) {
        Bike.model.find(function(err, data) {
            res.send(data);
        });
    },

    update: function(req, res) {
        Bike.model.findByIdAndUpdate(req.params.id, req.body.bike, function() {
            res.sendStatus(200);
        });
    },

    delete: function(req, res) {
        Bike.model.findByIdAndRemove(req.params.id, function() {
            res.sendStatus(200);
        });
    }
};

module.exports = Bike;
