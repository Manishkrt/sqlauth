
import  express  from "express";
import cors from "cors";
import conn from "./db/conn.js";
import router from "./Routes/router.js";


const app = express();

const port = 8000;

// middleware
app.use(express.json())
app.use(cors());

app.use(router);



app.listen(port,()=>{
  
    console.log("server starts at port no :" + port);
})