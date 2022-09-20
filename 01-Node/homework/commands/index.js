const fs = require('fs');
const request = require('request');

const echo = (args, print)=> {
  print(args.join(' '))
};
const pwd = (args, print) => {
  print(__dirname.split('\\').at(-1))
};
const date = (args, print) => {
  print(Date())
};

const ls = (args, print) => {
  fs.readdir(".", (err, files)=>{
    if (err) throw err;
    print(files.join('\n'))
  });
};
const cat = (args, print) => {
  fs.readFile(args.at(0), 'utf-8', (err, data)=>{
    if (err) throw err;
    print(data)
  });
};
const head = (args, print) => {
  fs.readFile(args.at(0), 'utf-8', (err, data)=>{
    if (err) throw err;
    print(data.split('\n').splice(0, 5).join("\n"));
  });
};
const tail = (args, print) => {
  fs.readFile(args.at(0), 'utf-8', (err, data)=>{
    if (err) throw err;
    print(data.split('\n').splice(-5).join("\n"));
  });
};
const curl = (args, print) => {
  // const data = request(args[0]);
  request(args[0], (err, data)=>{
    if (err) throw err;
    print(data.body)
  })
};

module.exports = {
  echo,
  pwd,
  date,
  ls,
  cat,
  head,
  tail,
  curl
}
// module.exports = {
//     echo: () => {},
//     pwd: ()=>process.stdout.write(process.mainModule.filename),
//     date: ()=>process.stdout.write(Date()),
//     ls: ()=> fs.readdir('.', function(err, files) {
//     if (err) throw err;
//     files.forEach(function(file) {
//       process.stdout.write(file.toString() + "\n");
//     })
//     process.stdout.write("prompt > ");
//   }),
//   echo: ()=> process.stdin.on('data', function (data) {
//     process.stdout.write(data.toString());
//   })
// }