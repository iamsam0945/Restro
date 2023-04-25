const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    name:{
        type:String,
        require:[true,'Name is required']
    },
    email:{
        type:String,
        require:[true,'E-mail is required']
    },
    password:{
        type:String,
        require:[true,'Password is required']
    },
    isAdmin:{
        type:Boolean,
        default:false
    },

},{timeStamps:true})

module.exports=mongoose.model( 'User',userSchema)