const express = require("express");

const Sign = (str) => `<p style="font-size:50px; background-color: lightyellow;margin:auto; color: red; padding: 10px; border:3px solid red; width:fit-content">${str}</p>`

const app = express();

app.use("/assets/", express.static("./public"))

app.get("/", (req, res)=>{
    res.send(Sign('Estas en "/"'))
})

app.get("/api", (req, res)=>{
    var obj = {
        nombre: "prueba",
        framework: "express",
        ventaja: "sealiazo por nosotros. Amen"
    }
    res.json(obj)
})

app.get("/api/:id/:nombre/:edad/:tuvieja", (req, res)=>{
    let {id, nombre, edad, tuvieja} = req.params;
    res.json({id, nombre, edad, tuvieja})
})
app.get("/api/:id", (req, res)=>{
    let {id} = req.params;
    res.json({id})
})
app.get("/static", (req, res)=>{
    res.send(
        '<html><head> \
      <link href="/assets/style.css" rel="stylesheet"> \
      </head><body> \
      <p>Archivos estaticos rapido y facil!!</p>\
      <img src="/assets/imagen.jpg">\
      </body></html>'
    )
})
app.get("/datos/", (req, res)=>{
    res.json(req.query)
})

app.get("/form", (req, res)=>{
    res.send(
    '<html><head> \
    <link href="/assets/style.css" rel="stylesheet"> \
    </head><body>\
     <form method="POST" action="/form">\
     Nombre <input name="nombre" type="text"><br>\
     Apellido <input name="apellido" type="text"><br>\
     Curso <input name="curso" type="text"><br>\
     <input type="submit">\
     </form>\
    </body></html>'
    )
})
app.use(express.urlencoded({extended:false}));
app.post("/form", (req,res)=>{
    res.json(req.body)
})

app.use(express.json());
app.post("/formjson", (req, res)=>{
    res.json(req.body)
})
app.listen(3000);