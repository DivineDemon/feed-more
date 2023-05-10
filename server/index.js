import cors from "cors";
import express from "express";
import connectDB from "./db.js";
import * as dotenv from "dotenv";
import { errorHandler } from "./middleware/errorHandler.js";

dotenv.config(); // Configure .env
const app = express(); // Initialize App
const PORT = process.env.PORT || 3000; // Initialize Port

// Middleware
app.use(cors());
app.use(errorHandler);
app.use(express.json({ limit: "200mb", extended: true }));
app.use(express.urlencoded({ limit: "200mb", extended: true }));

// Starting the Server
const startServer = () => {
  try {
    connectDB(process.env.MONGO_URL);
    app.listen(PORT, () => {
      console.log(`Server Active on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error.message);
  }
};

startServer();
