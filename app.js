import express from "express"
const app=express()
const port=5002
app.use(express.json())

app.get("/path",(req,res)=>{
    try {
        let user=req.query
        console.log(user);
        res.status(200).json(user)
    } catch (error) {
        console.log(error);
    }
})
app.listen(port,()=>{
    console.log("app is listening");
})

// import express from "express"
// const app=express()
// const port = 5000
// app.use(express.json())
// app.get("/path",(req/res)=>{
//     try {
//         let user=req.query
//         console.log(user)
//         res.status(200).json(user)
//     } catch (error) {
//         console.log(error);
//     }
// })

// app.listen(port, ()=> {
//     console.log("app is listening");
// })