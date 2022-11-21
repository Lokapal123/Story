const express = require("express");

const bp = require("body-Parser");

const app = express();

const date = require(__dirname + "/date.js");

app.set('view engine', 'ejs');

app.use(bp.urlencoded({extended: true}));

app.use(express.static("public"));

const items = ["Buy Food", "Eat Food"];

const workItems = [];

app.get("/", function(req, res) {
const day = date.getDate();

  res.render("list", {listTitle: day,newListItems: items});
})

app.post("/", function(req, res) {
const item = req.body.newItem;
  if (req.body.list === "work")
   {
     workItems.push(item);
     res.redirect("/work")
   }
   else
    {
      items.push(item)
      res.redirect("/");
    }
});

app.get("/work", function(req, res) {
  res.render("list", {listTitle: "work list",newListItems: workItems });
});

app.get("/about",function(req,res){
  res.render("about");
})

app.listen(3000, function() {
  console.log("port is listening at 3000");
})
