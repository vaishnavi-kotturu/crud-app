const express = require('express');
const route=express.Router();

const dotenv=require('dotenv');
const PORT=process.env.PORT||8080;
const axios=require('axios');

const services=require('../services/render');
const controller=require('../controller/controller');
// @description Root Route, @method GET

route.get('/', (req,res)=>{

    axios.get(`http://localhost:${PORT}/api/users`)
        .then(function(response){
            console.log(response.data)
            res.render('index',{users:response.data});
        })
        .catch(err=>{
            res.send(err);
        })
})

// @description Add Users Route, @method GET

route.get('/add-user', services.add_user)

// @description Update Users Route, @method GET

route.get('/update-user',(req,res)=>{
    axios.get(`http://localhost:${PORT}/api/users`,{params:{id:req.query.id}})
        .then(function(userdata){
            res.render("update_user",{user:userdata.data})
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

route.get('/api/users/city:city', controller.filtercity);

module.exports=route