const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Hello World from home page");
})

app.get('/about', (req, res) => {
    res.send("Hello World from about page "+req.query.myname +" "+ req.query.userid);
})

app.get('/search', (req, res) => {
    res.send("Hello World from search page");
})


app.listen(3000,()=>console.log("server running on port 3000"));