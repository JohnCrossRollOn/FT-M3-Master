const http = require('http');
const fs = require('fs');

const beatles={
  '/John%20Lennon': {
    name: "John Lennon",
    birthdate: "09/10/1940",
    profilePic:"https://blogs.correiobraziliense.com.br/trilhasonora/wp-content/uploads/sites/39/2020/10/CBNFOT081020100047-550x549.jpg"
  },
  '/Paul%20McCartney':{
    name: "Paul McCartney",
    birthdate: "18/06/1942",
    profilePic:"http://gazettereview.com/wp-content/uploads/2016/06/paul-mccartney.jpg"
  },
  '/George%20Harrison':{
    name: "George Harrison",
    birthdate: "25/02/1946",
    profilePic:"https://canaldosbeatles.files.wordpress.com/2012/02/george-george-harrison-8321345-438-600.jpg"
  },
  '/Richard%20Starkey':{
    name: "Richard Starkey",
    birthdate: "07/08/1940",
    profilePic:"http://cp91279.biography.com/BIO_Bio-Shorts_0_Ringo-Starr_SF_HD_768x432-16x9.jpg"
  }
}

http.createServer((req, res)=>{
  if (req.url.includes('/api/')) {
    var apiReqParams = '/'+req.url.split('/').slice(2).join('/');
  };
  if (beatles[req.url]) {
    let {name, birthdate, profilePic} = beatles[req.url];
    res.writeHead(200, {'Content-Type': 'text/html'});
		let html = fs.readFileSync('./index.html', 'utf-8')
		html = html
    .replace('{name}', name)
    .replace('{birthdate}', birthdate)
    .replace('{profilePic}', profilePic);
		res.end(html);
  }
  else if (req.url === '/api') {
    res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(JSON.stringify(beatles));
  }
  else if(beatles[apiReqParams]){
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(beatles[apiReqParams]));
  }
  else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 Beatle Not Found');
  }
}).listen(3001, 'localhost')