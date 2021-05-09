const express = require('express');
const route=express.Router();

const dotenv=require('dotenv');
const PORT=process.env.PORT||8080; 
const axios=require('axios');


const services=require('../services/render');
const controller=require('../controller/controller');

const ExpressError = require('../utils/ExpressError');

// @description Root Route, @method GET
route.get('/', services.homeRoutes)

// @description Add Users Route, @method GET
route.get('/add-user', services.add_user);

// @description Route for viewing helpline, @method GET
route.get('/helpline', services.helpline);

// @description Update Users Route, @method GET
route.get('/update-user', services.update_user);
route.get('/filter-city', services.filter_city);
route.get('/helplinelink', services.helplinelink);
route.get('/filter-supplier', services.filter_supplier);

//API
route.post('/api/users',controller.create);
route.get('/api/users',controller.find);
route.put('/api/users/:id',controller.update);
route.delete('/api/users/:id',controller.delete);

route.get('/api/filter', controller.filtercity);
route.get('/api/city', controller.get_city);
route.get('/api/helpline', controller.get_no);
route.get('/api/helplinelink', controller.helplinelink);
route.get('/api/suppliers', controller.filtersupplier);


route.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404))
})

route.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Oh No, Something Went Wrong!'
    res.status(statusCode).render('error', { err })
})

module.exports=route