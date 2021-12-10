const express = require('express');
const connectDB = require('./db/connect');
const productsRouter = require('./routes/productsRoute');
const notFoundMiddleware = require('./middlewares/not-found');
const errorHandlerMiddleaware = require('./middlewares/error-handler');
require('express-async-errors');

const app = express();
const port = process.env.PORT || 3000;

// MIDDLEWARES
require('dotenv').config();
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send(`<h1>Store API</h1><a href='/api/products'>products route</a>`);
});
app.use('/api/products', productsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleaware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
