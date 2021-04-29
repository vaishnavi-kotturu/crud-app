const mongoose=require('mongoose');

var schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true,
        // unique:true
    },
    city: {
        type: String,
        required: true,
        // enum: ['Gwalior', 'Indore'],
        // select: true
    },
    
    contact: {
        type: String,
        required: true,
    },

    availability: {
        type: String,
        required: true
    },
    timestamp:{
        type:String
    }
    
});

// var schema2=new mongoose.Schema({
//     city: {
//         type: String, unique : true, required : true, dropDups: true
//     }    
// });


const Userdb=mongoose.model('userdb',schema);
// const Citydb=mongoose.model('citydb',schema2);

module.exports=Userdb; 
// module.exports={Userdb, Citydb};