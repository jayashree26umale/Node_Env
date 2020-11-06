const express = require('express')
const router = express()
const port = 3000
const dotenv=require('dotenv').config()
const mysql = require('mysql');

const mysqlhost = process.env.DB_HOST;
const mysqluser = process.env.DB_USER;
const mysqlpass = process.env.DB_PASSWORD;
const mysqldb = process.env.DB_NAME;

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json())



var con = mysql.createConnection({
  host: mysqlhost,
  user: mysqluser,
  password: mysqlpass,
  database:mysqldb
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});



router.get('/createDb',(request,response)=>{
    let sql= 'CREATE DATABASE lib';
    con.query(sql,(err,result)=>{
        response.send('Database Created')
        console.log("Database Created");
    });
});

router.get('/createtb',(request,response)=>{
    let sql= 'CREATE TABLE books(id int AUTO_INCREMENT,bookname varchar(255),description varchar(255),copies int,PRIMARY KEY(id))';
    con.query(sql,(err,result)=>{
        if(err)throw err
        response.send('Table Created')
        console.log("Table Created");
    });
});

router.get("/books",(request, response)=>{
    var queryText = "select * from books";
    
    con.query(queryText,(err, result)=>{
        if(err==null)
            {
                response.send(JSON.stringify(result));
                //console.log(result);
                console.log(response.statusCode)
            }
            else{
                response.send(JSON.stringify(err));
            }
    });
});

router.get("/:id",(request, response)=>{
    var queryText = `select * from books WHERE id= ${request.params.id}`;
    
    con.query(queryText,(err, result)=>{
        if(err==null)
            {
                response.send(JSON.stringify(result));
                //console.log(result);
            }
            else{
                response.send(JSON.stringify(err));
            }
    });
});


router.post("/books",(request, response)=>{
    var id= request.body.id;
    var bookname=request.body.bookname;
    var description=request.body.description;
    var copies=request.body.copies;

  var queryText = `INSERT INTO books values(${id},'${bookname}','${description}',${copies})`;
  
  con.query(queryText,(err, result)=>{
      if(err==null)
          {
              response.send(JSON.stringify(result));
              console.log(result);
          }
          else{
              response.send(JSON.stringify(err));
          }
  });
});


router.put("/:id",(request, response)=>{
    var id= request.params.id;
    var bookname=request.body.bookname;
    var description=request.body.description;
    var copies=request.body.copies;

    var queryText = `update books set bookname='${bookname}', description= '${description}',copies=${copies} where id=${id}`;
    con.query(queryText,(err, result)=>{
        if(err==null)
            {
                response.send(JSON.stringify(result));
            }
            else{
                response.send(JSON.stringify(err));
            }
    });
});

router.delete("/:id",(request, response)=>{
  var queryText = `delete from books WHERE id= ${request.params.id}`;
  
  con.query(queryText,(err, result)=>{
      if(err==null)
          {
              response.send(JSON.stringify(result));
              console.log(result);
          }
          else{
              response.send(JSON.stringify(err));
          }
  });
});




  
router.get('/', (req, res) => {
  res.send('Hello World!')
})

// const express = require('express');
// const app = express();
// const port = 3000;

var converter = require("./converter");


router.get('/message', function (req, res) {
     res.send('This is the message');
});

// var url = "http://localhost:3300/rgbToHex?red=255&green=255&blue=255";

router.get("/rgbToHex", function(req, res) {

  var red   = parseInt(req.query.red, 10);
  var green = parseInt(req.query.green, 10);
  var blue  = parseInt(req.query.blue, 10);
  var hex = converter.rgbToHex(red, green, blue);
  res.send(hex);

});


var calculator = function(){
     var total
    //  firstN,
    //  secondN;

     return{
          add:function(firstN,secondN){
               total=firstN+secondN
               return total;

          },

          subtract:function(firstN,secondN){
               total=firstN-secondN
               return total;

          },

          divide:function(firstN,secondN){
               total=firstN/secondN
               return total;

          },

          multiply:function(firstN,secondN){
               total=firstN*secondN
               return total;

          },

          total:function(){
               return total;
          }
     }
}
















router.get('/', (req, res) => {
    res.send('Hello World!')
  })

  router.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  
module.exports = router;
//module.exports = app;
module.exports=calculator();