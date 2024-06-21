const express = require('express');
const {config } =require('dotenv');
const mongoose = require('mongoose');
config()
const app = express();
const port =  process.env.API_PORT;
const dburl = process.env.MONGO_DB;


app.use(express.json);
app.use(express.urlencoded());
app.listen(5000,async()=>{
    console.log(`server is started at http://localhost:${port}`);
    console.log("press ctrl+c to stop");
    await mongoose.connect(dburl);
    console.log("mongodb connected");
});
