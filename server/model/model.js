const mongoose=require('mongoose');

var schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String
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

var schema2=new mongoose.Schema({
    state: {
        type: String,
        required : true,
    },
    number: {
        type: String,
        required : true,
    } 
},
    { collection : 'helpline_nosdbs' }
);


const Userdb=mongoose.model('userdb',schema);
const Helplineno=mongoose.model('helpline_nosdb',schema2);

// module.exports=Userdb;
// module.exports=Helplineno;
module.exports={Userdb, Helplineno};