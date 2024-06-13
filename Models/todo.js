const mongoose=require('mongoose')

const todo=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
})

module.exports=mongoose.model('Todo',todo)