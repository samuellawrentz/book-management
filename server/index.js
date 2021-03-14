var express = require("express");
var fs = require("fs");
var cors = require('cors');

var app = express();
app.use(express.json());
app.use(cors())

app.get("/getbooks", (req, res, next) => {
    fs.readFile('./books.json', 'utf8', (err, data) =>{
        res.json(data);
    });
   });

   app.get("/test", (req, res, next) => {
       console.log('Hello');
       res.sendStatus(200);
   });

app.post("/writebooks", (req, res, next) => {
    const books = req.body;
    fs.writeFileSync('./books.json', JSON.stringify(books), 'utf8');
    res.sendStatus(200);
   });

app.listen(3000, () => {
 console.log("Server running on port 3000");
});