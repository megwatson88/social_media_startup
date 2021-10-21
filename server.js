const express = require('express');
const mongoose = require('mongoose');

const app = express()
const PORT = process.env.PORT || 3001;

const db = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/populatedb', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//where do I start to build my API routes? 

//can i get a template in how to build it out for the assignment? 

app.listen(PORT, () => {
    console.log(`App running on ${PORT}`)
})