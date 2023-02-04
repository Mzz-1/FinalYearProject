require('dotenv').config();

const express = require('express');
const routes = require('./routes/Index')
const app = express();


// middleware

app.use(express.json());

const port = process.env.PORT || 5000;

routes.forEach(route => {
    app[route.method](route.path, route.handler);
});


const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();