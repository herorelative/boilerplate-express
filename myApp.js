let express = require('express');
let app = express();

console.log("Hello World");

// Logs all request paths and method
app.use(function (req, res, next) {
    res.set('x-timestamp', Date.now())
    res.set('x-powered-by', 'freecodecamp.com')
    console.log(`[${new Date().toISOString()}] ${req.ip} ${req.method} ${req.path}`);
    next();
  });

var options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html','css','js','ico','jpg','jpeg','png','svg'],
    index: ['index.html'],
    maxAge: '1m',
    redirect: false
  };
  
  app.use('/public', express.static(process.cwd() + '/public'));
  
  app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/views/index.html");
  });




































 module.exports = app;
