const app = require("express")();
const path = require("path");
const uuid = require("uuid");
require("dotenv").config({
    path: path.join(__dirname, "./security/.env")
});


app.use(async function(req,res,next) {
    let auth = req.headers.authorization;
    if(auth !== process.env.KEY) return res.status(401).end();
})

app.get("/", async(req,res) => {
    res.send("Ok");
});


app.listen(3000);


