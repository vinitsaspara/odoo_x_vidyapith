import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

dotenv.config();
connectDB(); // Connect MongoDB

const app = express();
app.use(cors());
app.use(express.json()); // Enable JSON parsing

app.get("/", (req, res) => {
    res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port : ${PORT}`));
