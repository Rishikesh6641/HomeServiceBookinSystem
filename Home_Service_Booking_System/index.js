import express from 'express'
import { establishConnection } from './config/DbConfig.js';
import serviceRouter from './router/BookingRouter.js';
import cors from 'cors'

const app=express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/create",serviceRouter);
app.use("/getData",serviceRouter);
app.use("/updateData",serviceRouter);
app.use("/deleteData",serviceRouter);

const PORT=4050;
app.use(cors({
    origin: 'http://127.0.0.1:5500'
  }));
  

app.listen(PORT,()=>{
    console.log("Connected wih server..."+PORT);
    establishConnection();
});