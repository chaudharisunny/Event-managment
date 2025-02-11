const mongoose=require('mongoose')

const eventSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    organizer:{
        type:String,
        required:true
    },
    attendee:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},{timestamps:true})

module.exports=mongoose.model('events',eventSchema)