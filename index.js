import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  // console.log(names,blogs);
  res.render("index.ejs",{
    nameList: names,
    blogList: blogs
  });
});
app.get("/create",(req,res)=>{
    res.render("create.ejs");
})

var names=[];
var blogs=[];
app.post("/submit",(req,res)=>{
  names.push(req.body.Name);
  blogs.push(req.body.Content);
  res.redirect("/");
})
app.post("/delete",(req,res)=>{
  var index = req.body.delete;
  names.splice(index,1);
  blogs.splice(index,1);
  res.redirect("/");
})

app.listen(port,()=>{
    console.log(`Server running at port ${port}`);
})