const express = require('express');
const route=express.Router();

const dotenv=require('dotenv');
const PORT=process.env.PORT||8080; 
const axios=require('axios');

const services=require('../services/render');
const controller=require('../controller/controller');
// @description Root Route, @method GET

route.get('/', services.homeRoutes)

// @description Add Users Route, @method GET

route.get('/add-user', services.add_user)
// route.get('/helpline', services.helpline)

// @description Update Users Route, @method GET

route.get('/update-user', services.update_user)

route.get('/filter-city',(req,res)=>{
    let one = `http://localhost:${PORT}/api/filter`;
    let two = `http://localhost:${PORT}/api/city`;
    const requestOne = axios.get(one,{params:{city:req.query.city}});
    const requestTwo = axios.get(two);

    axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
        const responseOne = responses[0];
        const responseTwo = responses[1];
        const cities = responseTwo.data; 
        res.render('index',{users:responseOne.data, cities}); 
      })).catch(err => { 
            res.send(err);
      })
})

route.get('/helpline',(req,res)=>{
    axios.get(`http://localhost:${PORT}/api/city`)
        .then(function(citydata){
            const cities = citydata.data; 
            res.render("helpline",{cities})
        })
        .catch(err=>{
            res.send(err);
        })
})

//API
route.post('/api/users',controller.create);
route.get('/api/users',controller.find);
route.put('/api/users/:id',controller.update);
route.delete('/api/users/:id',controller.delete);

route.get('/api/filter', controller.filtercity);

// route.post('/api/city', controller.create_city);
route.get('/api/city', controller.get_city);

module.exports=route