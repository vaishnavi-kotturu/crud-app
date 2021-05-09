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
    let one = `http://localhost:${PORT}/api/city`;
    let two = `http://localhost:${PORT}/api/suppliers`;
    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);
    axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
        const responseOne = responses[0];
        const responseTwo = responses[1];
        const cities = responseOne.data; 
        const users = responseTwo.data;
        res.render('add_user',{cities, users}); 
    })).catch(err => { 
            res.send(err);
    })
}

exports.helplinelink=(req,res)=>{
    let one = `http://localhost:${PORT}/api/city`;
    let two = `http://localhost:${PORT}/api/suppliers`;
    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);
    axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
        const responseOne = responses[0];
        const responseTwo = responses[1];
        const cities = responseOne.data; 
        const users = responseTwo.data;
        res.render('helplinelink',{cities, users}); 
    })).catch(err => { 
            res.send(err);
    })
} 



exports.helpline=(req,res)=>{
    let one = `http://localhost:${PORT}/api/helpline`;
    let two = `http://localhost:${PORT}/api/city`;
    let three = `http://localhost:${PORT}/api/suppliers`;
    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);
    const requestThree = axios.get(three);
    axios.all([requestOne, requestTwo, requestThree]).then(axios.spread((...responses) => {
        const responseOne = responses[0];
        const responseTwo = responses[1];
        const responseThree = responses[2];
        const cities = responseTwo.data; 
        res.render('helpline',{helpline:responseOne.data, cities, users:responseThree.data}); 
      })).catch(err => { 
            res.send(err);
      })
}
// let one = `http://localhost:${PORT}/api/suppliers`;
//     let two = `http://localhost:${PORT}/api/city`;
//     const requestOne = axios.get(one,{params:{supplier:req.query.name}});
//     const requestTwo = axios.get(two);


exports.update_user=(req,res)=>{
    let one = `http://localhost:${PORT}/api/users`;
    let two = `http://localhost:${PORT}/api/city`;
    let three = `http://localhost:${PORT}/api/suppliers`;

    const requestOne = axios.get(one,{params:{id:req.query.id}});
    const requestTwo = axios.get(two);
    const requestThree = axios.get(three);

    axios.all([requestOne, requestTwo, requestThree]).then(axios.spread((...responses) => {
        const responseOne = responses[0];
        const responseTwo = responses[1];
        const responseThree = responses[2];
        const cities = responseTwo.data;
        res.render('update_user',{user:responseOne.data, cities, users:responseThree.data}); 
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

exports.filter_city=(req,res)=>{
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
}

exports.filter_supplier=(req,res)=>{
    let one = `http://localhost:${PORT}/api/suppliers`;
    let two = `http://localhost:${PORT}/api/city`;
    const requestOne = axios.get(one,{params:{supplier:req.query.name}});
    const requestTwo = axios.get(two);

    axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
        const responseOne = responses[0];
        const responseTwo = responses[1];
        const cities = responseTwo.data; 
        // console.log(responseOne.data);
        res.render('index',{users:responseOne.data, cities}); 
      })).catch(err => { 
            res.send(err);
      })
}