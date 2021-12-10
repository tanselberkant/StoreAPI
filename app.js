const express = require('express');
const connectDB = require('./db/connect');

const app = express();
const PORT = process.env.PORT || 3000;

// MIDDLEWARES
require('dotenv').config();

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
