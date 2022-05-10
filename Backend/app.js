
//importing express framework

const express = require('express');

//declaring express function
const app = express();
const cors=require('cors');
app.use(cors());

//converting everydata to json
app.use(express.json());

//importing router;
const router=require("./routes/bookRoutes");

app.use("/books",router);

//connecting to database with port
const mongoose=require('mongoose');
const dburl="mongodb+srv://admin:4gcJD2syGSdBe7h3@cluster0.og4lz.mongodb.net/BookStore?retryWrites=true&w=majority"
mongoose.connect(dburl,{}).then(()=>{ console.log("connected to Database")})
.then(()=>{app.listen(4000)})
.catch((err)=>{console.log(err)})


