const axios=require('axios');
const { response } = require('express');

const dotenv=require('dotenv');
const PORT=process.env.PORT||8080; 

exports.homeRoutes=(req,res)=>{

    let one = `http://localhost:${PORT}/api/users`;
    let two = `http://localhost:${PORT}/api/city`;
    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);

    axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
        const responseOne = responses[0];
        const responseTwo = responses[1];
        const cities = responseTwo.data;
        res.render('index',{users:responseOne.data, cities}); 
      })).catch(err => { 
            res.send(err);
      })
}

exports.add_user=(req,res)=>{
    res.render('add_user')
}

exports.helpline=(req,res)=>{
    res.render('helpline')
}

exports.update_user=(req,res)=>{

    let one = `http://localhost:${PORT}/api/users`;
    let two = `http://localhost:${PORT}/api/city`;
    const requestOne = axios.get(one,{params:{id:req.query.id}});
    const requestTwo = axios.get(two);

    axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
        const responseOne = responses[0];
        const responseTwo = responses[1];
        const cities = responseTwo.data;
        res.render('update_user',{user:responseOne.data, cities}); 
      })).catch(err => { 
            res.send(err);
      })
    // axios.get(`http://localhost:${PORT}/api/users`,{params:{id:req.query.id}})
    //     .then(function(userdata){
    //         res.render("update_user",{user:userdata.data})
    //     })
    //     .catch(err=>{
    //         res.send(err);
    //     })
}
