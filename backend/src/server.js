import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

// This line makes process.env.MONGO_URI global and accessible to every files in the backend folder
dotenv.config();

const app = express();

// middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json()); // this parses JSON bodies: req.body
app.use(rateLimiter);

// Example
// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//   next();
// });

app.use("/api/notes", notesRoutes);

const PORT = process.env.PORT || 5001;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
  });
});
