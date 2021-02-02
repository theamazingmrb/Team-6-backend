const location = require('../controllers/search.controller.js')

module.exports = app => {
    
    app.use((req,res,next) => {
        // set header and allow use of x access token which we'll use to pass our token
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-type, Accept'
        )
        next()
    })
    
    let router = require('express').Router();

    //  Create a new Location
    router.post('/', location.findOrCreate)

    // Retrieve all Locations
    router.get('/', location.findAll);

    // Retrieve a single Location with id
    router.get('/:id', location.findOne);

    //Update a location with id
    router.put('/:id', location.update);

    // Delete a Location with id
    router.delete('/:id', location.delete);
    // Api
    app.use('/api/location', router)

}

