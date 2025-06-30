import cookieParser from 'cookie-parser';
import  dotenv from 'dotenv';
dotenv.config();
import userRutes from './routes/user.routes.js'
import messageRoutes from './routes/message.routes.js'
import express from "express"
import { connectDB } from './db/connection1.db.js';
connectDB();

const app = express();
app.use(cookieParser());
app.use(express.json());

// Routes
app.use("/api/v1/user",userRutes);
app.use("/api/v1/message",messageRoutes);



// middelwares 
import { errroMeddleware } from './middlewares/error.middeaware.js';
app.use(errroMeddleware)

const PORT = process.env.PORT
app.listen(PORT,()=>{
  console.log(`Sserver is listening on PORT ${PORT}`)
})