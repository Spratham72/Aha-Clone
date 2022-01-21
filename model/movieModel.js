const mongoose=require('mongoose');
const MovieSchema=new mongoose.Schema({
    title:{required:true, type:String},
    actors:[{type:Object, required:true}],
    director:[{type:Object, required:true}],
    poster_url:{type:String, required:true},
    description:{type:String, required:true},
    trailer:{type:String, required:true},
    studio:{type:String, required:true},
    premium:{type:String, required:true},
    age:{type:String, required:true},
    year:{type:String, required:true},
    time:{type:String, required:true},

})
const Movie=mongoose.model("Movie",MovieSchema);
module.exports=Movie;