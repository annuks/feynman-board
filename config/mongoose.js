const mongoose =require('mongoose');
mongoose.connect(process.env.DB);
const db= mongoose.connection;
db.on('error',console.error.bind(console,'Error while Connecting to Database'));
db.once('open', function(){
    console.log ("Connected Succesfully with MongoDB")
});
module.exports=db; 