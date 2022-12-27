const express = require("express")
const DarkArmy = require("./model");
require("./db");

const con = express()

con.use(express.json())

con.get("/" ,(req, res)=> {
res.status(200).json({"DarkArmy": "MY STRENGTH AND WANT TO GROW WITH YOU ALWAYS"})
})

con.get("/all" , async (req, res)=> {
    const darkarmy = await DarkArmy.find({});
    res.status(200).json(darkarmy);
    })

con.post("/", async (req, res)=> {
    const {name, title} = req.body;
    const darkarmy = await new DarkArmy({name, title}).save();

    res.status(201).json(darkarmy);
})

con.listen(3004, ()=> console.log("Server is running on port no:", 3004));