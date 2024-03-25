import express from "express";
import bodyParser from "body-parser";
import _ from "lodash";

const app =express();
const port = 3000;

var posts = [] ;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res)=>{
    res.render("index.ejs",{posts:posts});
})

app.get("/about",(req,res)=>{
    res.render("about.ejs")
})
app.get("/contact",(req,res)=>{
    res.render("contact.ejs")
})
app.get("/compose",(req,res)=>{
    res.render("compose.ejs")
})
app.get('/post/:postName', (req, res) => {
    const requestnames = _.lowerCase(req.params.postName);
    const mybodycontent = posts.content
      posts.forEach(function(post){
        const mybodycontent = post.content
         });
     posts.forEach(function(post){

    const storedtitles = _.lowerCase(post.title);
     
    
    if (storedtitles === requestnames){
        res.render("post.ejs", {
            mytitles: post.title, 
            content:post.content})
    } 
  })
});
app.post("/compose", (req,res)=>{
    const Post = {
    title : req.body.postTitle,
    content : req.body.postBody
    }
    posts.push(Post)
    
    res.redirect("/")
})
app.listen(port,(req,res)=>{
    console.log(`Server is running on port ${port}`);
})