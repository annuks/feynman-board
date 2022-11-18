const mongoose= require('mongoose');
const topicSchema = new mongoose.Schema({

    userid:{
        type:String,
        required:true,
    },

    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    }
});
module.exports=mongoose.model('Topic',topicSchema);