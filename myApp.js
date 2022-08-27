let express = require('express');
let app = express();
app.use('/public',express.static("public"));
app.use(function middleware(req,res,next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
})

// console.log("Hello World");
app.get("/",function (req, res) {
  // res.send('Hello Express');
  const indexPath = __dirname + `/views/index.html`;
  res.sendFile(indexPath);
})

app.get("/json", (req,res) => {
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    res.json({"message":"HELLO JSON"});  
  } else {
    res.json({"message":"Hello json"});  
  }
})

app.get("/now", (req,res,next) => {
  req.time = new Date().toString();
  next();
},(req,res) => {
  res.json({time:req.time})
});

app.get("/:word/echo",(req,res) => {
  res.json({echo:req.params.word});
})

































 module.exports = app;
