const mongoose = require('mongoose')
const express = require('express')
const cors=require('cors')
const app =express()
const connection = require("./db");

require('dotenv').config();

//middlewares 
app.use(express.json());
app.use(cors());

//connexion db 

connection();


//creating server

const port = 8001;
app.listen(port,  () => {
  console.log(`Server running at http://:${port}/`);
}); 

