// ROUTES TODOS
    var Hike = require('../models/hike.js');
    module.exports     = function(app) {

    app.get('/hike', Hike.findAll);
    app.post('/hike', Hike.create);
    app.put('/hike/:id', Hike.update);
    app.delete('/hike/:id', Hike.delete);

    }
