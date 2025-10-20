import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import userRoutes from "./routes/userRoutes.js";

// APP CONFIGURATION
const app = express();
const port = process.env.PORT || 3000;

// DB CONNECTION
connectDB();

// MIDDLEWARES  
app.use(express.json());
app.use(cors());

// API END-POINTS
app.use("/api/user", userRoutes);

// APP LISTEN
app.listen(port, console.log(`DOKING PORT : ${port}`));