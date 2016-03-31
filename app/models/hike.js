// MODEL HIKE
    var mongoose = require('mongoose');


    var hikeSchema = new mongoose.Schema({
    description: String
    });

    var Hike = {

    model: mongoose.model('Hike', hikeSchema),

    create: function(req, res) {
        Hike.model.create({
            description: req.body.description
        }, function(){
            res.sendStatus(200);
        });
    },

    findAll: function(req, res) {
        Hike.model.find(function (err, data) {
            res.send(data);
        });
    },

    update: function(req, res){
        Hike.model.findByIdAndUpdate(req.params.id, {
            description: req.body.description
        }, function(){
            res.sendStatus(200);
        });
    },

    delete: function(req, res){
        Hike.model.findByIdAndRemove(req.params.id, function(){
            res.sendStatus(200);
        });
    }
};

    module.exports = Hike;
