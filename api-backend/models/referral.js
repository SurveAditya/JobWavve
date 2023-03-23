const mongoose = require('mongoose');
const User=require("./User")

const referralSchema = new mongoose.Schema({
  name:String,
    company:String,
    referral:[
       {
        id: {type: Schema.ObjectId,
        require: true,
        ref: "User"},
        message:String,
       }
    ],
    count:{type:Number,default:0}
});

module.exports = mongoose.model('referral', referralSchema);
