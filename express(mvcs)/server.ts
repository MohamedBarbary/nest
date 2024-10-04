import express from "express";
import dotenv from 'dotenv';
import helmet from "helmet";
import morgan from "morgan";
import compression from "compression";
import {rateLimit} from "express-rate-limit";
import productRouter from "./routes/productRoute";
import pool from "./models/db";
import errorHandler from "./utils/errorHandler";
dotenv.config();


export const app = express();
app.use(express.json());

const limiterOption ={
    windowMs: 15*60* 1000, 
	limit: 100, 
    message :"too many requests from this ip ",
};

app.use(compression());
app.use(morgan('dev'))
app.use(rateLimit(limiterOption));
app.use(helmet({
        contentSecurityPolicy:false, // for test only!!!!!
         xFrameOptions:{
            action:"deny"
         }      
}));


// app.set('view engine','pug')
// app.set('views',path.join(__dirname,'views'));
// app.use(express.static(path.join(__dirname,"public")));


app.use("/api/products",productRouter);
app.use(errorHandler);

app.get("/db/products", async (req, res) => {
    try {
      const [products] = await pool.query("SELECT id, title, price FROM productsContent;");
      res.status(200).json({
        products
      });
    } catch (error) {
      console.error(error);
    }
  });

const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`server is running ==> PORT :: ${PORT}`);
});
