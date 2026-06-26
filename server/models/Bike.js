const mongoose = require("mongoose");

const bikeSchema = new mongoose.Schema(
{
    ownerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    bikeName:{
        type:String,
        required:true
    },

    bikeNumber:{
        type:String,
        required:true
    },

    description:String,

    pricePerHour:{
        type:Number,
        required:true
    },

    images:[String],

    location:{
        lat:Number,
        lng:Number,
        address:String
    },

    available:{
        type:Boolean,
        default:true
    },

    inRide:{
        type:Boolean,
        default:false
    }

},
{
    timestamps:true
});

module.exports =
mongoose.model("Bike",bikeSchema);