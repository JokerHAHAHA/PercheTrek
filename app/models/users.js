// MODEL USERS
var mongoose = require('mongoose');

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
}

var usersSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        unique: true,
        required: 'Un email est requis',
        validate: [validateEmail, 'Email invalide'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Email invalide']
    },
    password: String,
    badges: [String]
});

var Users = {

    model: mongoose.model('Users', usersSchema),

    create: function(req, res) {
        Users.model.create({
            email: req.body.email,
            password: req.body.password
        }, function(err, data) {
            if (!err) {
                Users.model.findOne({email:req.body.email,password:req.body.password},function(err, data) {
                    if(!err) {
                        if(!data) {
                            res.sendStatus(401);
                        } else {
                            res.send(data);
                        }
                    } else {
                        res.sendStatus(500);
                    }
                });
            } else {
                if(!err.code) {
                    res.send(err);
                } else {
                    Users.model.findOne({email:req.body.email,password:req.body.password},function(err, data) {
                        if(!err) {
                            if(!data) {
                                res.sendStatus(401);
                            } else {
                                res.send(data);
                            }
                        } else {
                            res.sendStatus(500);
                        }
                    });
                }
            }
        });
    },

    findAll: function(req, res) {
        Users.model.find(function(err, data) {
            res.send(data);
        });
    },

    update: function(req, res) {
        Users.model.findByIdAndUpdate(req.params.id, req.body.user, function() {
            res.sendStatus(200);
        });
    },

    delete: function(req, res) {
        Users.model.findByIdAndRemove(req.params.id, function() {
            res.sendStatus(200);
        });
    }
};

module.exports = Users;
