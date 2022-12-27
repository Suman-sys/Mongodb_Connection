const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/darkarmydb")
.then(()=> console.log("connected to database"))
.catch((err)=> console.log("error while connecting to database", err));