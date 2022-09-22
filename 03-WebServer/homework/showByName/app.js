var fs  = require("fs")
var http  = require("http")

// Escribí acá tu servidor
const imagenes = {
    "/arcoiris_doge.jpg": "./images/arcoiris_doge.jpg",
    "/badboy_doge.jpg": "./images/badboy_doge.jpg",
    "/code_doge.jpg": "./images/code_doge.jpg",
    "/resaca_doge.jpg": "./images/resaca_doge.jpg",
    "/retrato_doge.jpg": "./images/retrato_doge.jpg",
    "/sexy_doge.jpg": "./images/sexy_doge.jpg"
}
http.createServer((req, res)=>{
    if(imagenes[req.url]) {
        let doge = fs.readFileSync(imagenes[req.url]);
        res.writeHead(200, {'Content-Type': 'image/jpg'});
        res.end(doge)
    } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end("404 Doge not found")}
}).listen(3001, 'localhost');