// var event = require('events');
// var util = require('util');
//
// var myEmitter = new event.EventEmitter();
//
// myEmitter.on('someEvent',function(data){
//   console.log(data);
// })
//
// myEmitter.emit('someEvent',"kkkkkkkkkkkkkkkkkkkkkkkkk");
//
// function person(name){
//   this.name = name
// }
//
// util.inherits(person,event.EventEmitter);
//
// var kamal = new person("kamal");
// var nayana = new person('nayana');
// var amara = new person("amara");
//
// var people =[kamal,nayana,amara];
//
// people.forEach(function(person){
//   person.on('speak', function(data){
//     console.log(person.name + ' said ' + data);
//   });
// });
//
//
// amara.emit('spea',"i am hungry");
// kamal.emit('speak',"hiiiiiiiiii");
/* var fs = require("fs"); */

/* fs.readFile('text.txt','utf8',function(err,data){
  console.log(err);
  fs.writeFile('copy.txt',data,function(err){
    console.log(data);
  });
}); */

//fs.writeFileSync('write.txt',"i am written");
//console.log(readme);

/* fs.unlink("write.txt", function(err) {
  //console.log(err);
});

fs.rmdir("dasun", function(err) {}); */
/////////////////////////////////////////////////////////////////
var http = require("http");
var fs = require("fs"); /* myReadStream.on("data", function(chunk) {
  console.log("chunk of data ----- ");
  myWriteStream.write(chunk);
}); */ ///////////////////////////////// streams ////////////////////////// pipes //myReadStream.pipe(myWriteStream);

/* var server = http.createServer(function(req, res) {
  console.log(req.url + "   is the url");
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("hi dasun");
});

server.listen(3000, "127.0.0.1");
console.log("i am listening");
 */

/* var myReadStream = fs.createReadStream(__dirname + "/copy.txt", "utf8");
var myWriteStream = fs.createWriteStream(__dirname + "/text.txt"); */

/* var server = http.createServer(function(req, res) {
  console.log(req.url + "   is the url");

  if (req.url === "/home" || req.url === "/") {
    var myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8");

    res.writeHead(200, { "Content-Type": "text/html" });

    myReadStream.pipe(res);
  } else if (req.url === "/contact") {
    var myReadStream = fs.createReadStream(__dirname + "/content.html", "utf8");

    res.writeHead(200, { "Content-Type": "text/html" });

    myReadStream.pipe(res);
  } else if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "text/json" });
    var jsonObj = {
      name: "kumara",
      age: 25,
      gender: "male"
    };
    res.end(JSON.stringify(jsonObj));
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    var myReadStream = fs.createReadStream(__dirname + "/404.html").pipe(res);
  }

  //myReadStream.pipe(res);
});

server.listen(3000, "127.0.0.1");
console.log("i am listening"); */

//////////////////////////////////////// after installing express

var express = require("express");
var bodyParser = require("body-parser");

// set("view engine", "ejs");

var app = express();
//var jsonParser = bodyParser.json();
app.set("view engine", "ejs");
app.use("/assets", express.static("assets"));

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/", function(req, res) {
  //res.send("this is home page");//////////to send text
  res.render("index");
});

app.get("/contact", function(req, res) {
  //res.send("this is home page");//////////to send text
  console.log(req.body);

  res.render("contact", { qs: req.query });
});

app.post("/contact", urlencodedParser, function(req, res) {
  //res.send("this is home page");//////////to send text
  console.log(req.body);

  //if (!req.body) return res.sendStatus(400);
  //res.send("welcome, " + req.body.who);
  res.render("success_contact", { data: req.body });
});

app.get("/profile/:id", function(req, res) {
  var data = {
    age: 25,
    name: "dasun",
    hobbies: ["fishing", "driving", "writting"]
  };
  res.render("profile", { person: req.params.id, data });
});

app.listen(3000);
