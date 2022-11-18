require('dotenv').config();
const express = require('express');
const port =1000;
const app =express();
const db =require('./config/mongoose');
const bodyparser = require('body-parser');
app.use(express.urlencoded());
app.use(express.json());
var cors = require('cors')


app.use(cors())

app.get('/', (req,res)=>{
    res.send("Home Landing");
})

app.use('/',require('./route'));


app.listen(port, function(err){
    if(err){
        console.log("Error in Server");
        return
    }
    else{
        console.log("Server is Running on Port:",port);

    }
})

