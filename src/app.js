const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { db } = require("../db/connection")

const port = 5000;

//TODO: Create a GET /musicians route to return all musicians 

app.get('/musicians', async (req, res) => {
    const musicians = await Musician.findAll();
    res.json(musicians);
   });

   app.get('/musicians/:id', async (req, res) => {
    const number = req.params.id;
    const musician = await Musician.findByPk(number);
    res.json(musician);
   });




module.exports = app;