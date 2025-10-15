import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";

// APP CONFIGURATION
const app = express();
const port = process.env.PORT || 3000;

// DB CONNECTION
connectDB();

// MIDDLEWARES  
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("WELCOME TO RABBIT API! ABHI");
});

// APP LISTEN
app.listen(port, console.log(`DOKING PORT : ${port}`));