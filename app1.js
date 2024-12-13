import express from "express";
import { log } from "node:console";
import { url } from "node:inspector";

const app = express();

const PORT = 5005;

app.use(express.json());

// Request.params
app.get("/link/:url", (req, res)=>{
    try {
  
      let userURl = req.params.url;
      console.log(url);
  
      res.status(200).redirect(`https://${userURl}`)
      
  
      
    } catch (error) {
      console.log(error);
      
    }
  })
  



  app.listen(PORT, () => {
    console.log(`your server is running at ${PORT}`);
  });