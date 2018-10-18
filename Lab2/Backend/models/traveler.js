var mongoose =require('mongoose');

var Traveler= mongoose.model('Traveler',{
    firstname : {
        type : String
    },
    lastname : {
        type : String
    },
    emailaddress :{
        type : String
    },
    password:{
        type:String
    }

})

module.exports = {Traveler};