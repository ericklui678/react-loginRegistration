import express from "express";
import path from "path";
import mongoose from "mongoose";
import auth from "./routes/auth";
// dotenv is useful for storing environment variables like mongoDB link and secret key
// inside .env file
import dotenv from "dotenv";

const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());

dotenv.config(); // looks into .env file for variables

mongoose.connect(process.env.MONGODB_URL);
let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("mongodb connection successful!"));

app.use("/api/auth", auth);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => console.log(`running on port ${port}`));
