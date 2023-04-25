const mongoose=require('mongoose')
const menuschema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    varients:[],
    prices:[],
    category:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
},
{timestamps:true}
)

const menumodel=mongoose.model('menu', menuschema)
module.exports=menumodel;