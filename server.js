// connecting to the config.env
require('dotenv').config({path: './config.env'});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// connecting to DB
const mongoose = require ('mongoose');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}));

mongoose.set('strictQuery', true);
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    throw err;
  });
  
const port = process.env.PORT || 4242;

app.listen(port, () => { console.log(`Server is running on port ${port}`)});
