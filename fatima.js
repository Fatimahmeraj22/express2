import express from "express"
const app = express ();
const PORT = 5002;

app.use(express.json());

app.get("/express", (req,res) => {
    try {
        res.status(200).send ("HEllo wolrd")
    } catch (error) {
        console.log(error);
    }
});

app.post("/api/register",(req,res)=> {
    try {
        let userInput = req.body;
        console.log(userInput);
        res.send(200).json(userInput);
    } catch (error) {
        console.log(error);
    }
})

app.listen(PORT , () => {
    console.log(`server is running up and ${PORT}`);
}) 