import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./Config/Connectdb.js";

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

app.use(cookieParser());
app.use(cors(
  {
    origin: process.env.FRONTEND_URL,
    credentials: true
  }
));

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
})
