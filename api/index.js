import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDb is connected");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

const PORT = process.env.port || 3000;

app.listen(3000, () => {
  console.log(`Server is running on port ${PORT}`);
});
