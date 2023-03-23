const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    password:{
        type:String,
        required:true,
    },
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    mobilenum:{
        type:String,
        required:true,
    },
    experience:{
        type:Number,
    },
    skills:{
        type:Array,
    },
    layoff:{
        type:Boolean
    },
    jobTitle: {
        type: Array,
      },
    location: {
        type: String,
        required: true
      },
    company: {
        type: String,
      },
    previousJobDesc: {
        type: String,
    },
    admin:{
        type:Boolean,
        default:false,
    },
    referral:[
        {
            id:String,
            message:String,
        }
    ]

});


module.exports=mongoose.model("User",userSchema);