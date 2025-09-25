const express= require("express")
const SERVER_PORT=process.env.PORT||3000;
const app=express();

// Middleware
app.use(express.json());
app.use(express.static('public'));

app.get("/", (req,res)=>{

    res.send("main page");
})
app.get("/hello", (req, res)=>{
    res.send("Hello Express JS")
})
app.get("/user", (req,res)=>{
    const firstname=req.query.firstname||"Pritesh";
    const lastname=req.query.lastname||"Patel"
    res.json({
        firstname:firstname,
        lastname:lastname
    })
})
app.post("/user/:firstname/:lastname",(req,res)=>{
    const firstname=req.params.firstname;
    const lastname=req.params.lastname;
    res.json({
        firstname:firstname,
        lastname:lastname
    })
})
app.post("/users",(req,res)=>{
    const users=req.body;
    res.json(users)

})
app.listen(SERVER_PORT,()=>{
    console.log(`Server is running on http://localhost:${SERVER_PORT}`)
})