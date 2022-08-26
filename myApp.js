let express = require('express');
let app = express();
app.use('/public',express.static("public"));
// console.log("Hello World");
app.get("/",function (req, res) {
  // res.send('Hello Express');
  const indexPath = __dirname + `/views/index.html`;
  res.sendFile(indexPath);
})

app.get("/json", (req,res) => {
  res.json({"message":"Hello json"});
})

































 module.exports = app;
