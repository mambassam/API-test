const express = require('express');
const app = express();

app.get("/", (req, res)=>{
    res.send("Welcome");
});// Forward slash means the context root of the application, or the url without anything after

app.get("/lorenzo", (req, res)=> {res.send("Welcome Lorenzo!");});

app.get('/micah', (req,res) => {res.send("Hello Micah!");});

app.get('/andra', (req,res) => {res.send("Hello Andra!");});

app.get('/Moses', (req,res) => {res.send("Hello Moses!");});

app.get('/levi', (req,res) => {res.send("Hello Levi!");});

app.listen(3000, ()=> {
    console.log("Listening");
})