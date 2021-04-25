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
    
})

const Userdb=mongoose.model('userdb',schema);

module.exports=Userdb