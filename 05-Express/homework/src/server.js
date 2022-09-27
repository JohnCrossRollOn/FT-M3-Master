const express = require("express");
// const postsRouter = require("../routes/posts.js");
// server.use('/posts', postsRouter)

const STATUS_USER_ERROR = 422;



// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
let id = 1;
let posts = [];

const server = express();
server.use(express.json());
server.use(express.urlencoded({extended:false}));

function Post({ author, title, contents }) {
    this.author = author;
    this.title = title;
    this.contents = contents;
    this.id = id;
};

server.post('/posts/', (req, res)=>{
    let {author, title, contents} = req.body;
    if (author&&title&&contents) {
        let newPost = new Post(req.body);
        id++;
        posts.push(newPost);
        res.json(newPost);
    } else {
        res.status(STATUS_USER_ERROR).json({error: "No se recibieron los parámetros necesarios para crear el Post"});
    }
    
});

server.post('/posts/author/:author', (req, res)=>{
    let {title, contents} = req.body;
    let {author} = req.params;
    if (author && title && contents) {
        let newPost = new Post({author, title, contents});
        id++;
        posts.push(newPost);
        res.json(newPost)
    } else {
        res.status(STATUS_USER_ERROR).json({error: "No se recibieron los parámetros necesarios para crear el Post"})
    }
});

server.get('/posts/', (req, res)=>{
    let {term} = req.query;
    
    if (term) {
        let allByTerm = posts.filter(({title, contents})=>{
            return title.includes(term)||contents.includes(term)
        })
        res.send(allByTerm)
    } else {
        res.json(posts)
    }
});

server.get('/posts/:author', (req, res)=>{
    let {author} = req.params;
    let allByAuthor = posts.filter(item=>item.author.includes(author))
    if (allByAuthor.length) {
        res.json(allByAuthor);
    } else {
        res.status(STATUS_USER_ERROR).json({error: "No existe ningun post del autor indicado"})
    }
})

server.get('/posts/:author/:title', (req, res)=>{
    let {author, title} = req.params;
    let allByAuthorAndTitle = posts.filter(item=>item.author.includes(author)).filter(item=>item.title.includes(title))
    if (allByAuthorAndTitle.length) {
        res.json(allByAuthorAndTitle);
    } else {
        res.status(STATUS_USER_ERROR).json({error: "No existe ningun post con dicho titulo y autor indicado"})
    }
})

server.put('/posts', (req, res)=>{
    let {id, title, contents} = req.body;
    if (id&&title&&contents) {
        let post = posts.find(((post)=>post.id===id))
        if(post) {
            post.contents = contents;
            post.title = title;
            res.json(post)
        } else {
            res.status(STATUS_USER_ERROR).json({error: "No se recibieron los parámetros necesarios para modificar el Post"})
        }

    } else {
        res.status(STATUS_USER_ERROR).json({error: "No se recibieron los parámetros necesarios para modificar el Post"})
    }
})

server.delete("/posts", (req, res) => {
    const { id } = req.body;
  
    const post = posts.find((post) => post.id === parseInt(id));
  
    if (!id || !post)
      res.status(STATUS_USER_ERROR).json({ error: "Mensaje de error" });
  
    posts = posts.filter((post) => post.id !== id);
  
    res.status(200).json({ success: true });
  });
  
  server.delete("/author", (req, res) => {
    const { author } = req.body;
  
    const authorPosts = posts.filter((post) => post.author === author);
  
    if (!author || !authorPosts.length)
      return res
        .status(STATUS_USER_ERROR)
        .json({ error: "No existe el autor indicado" });
  
    posts = posts.filter((post) => post.author !== author);
  
    res.status(200).json(authorPosts);
  });
  

module.exports = { posts, server };
