// var url = require("url");

// var address = "https://githup.com.com/mahamostaf";
// var endPoint=url.parse(address,true);
// console.log(endPoint.host);

const { write } = require("fs");
const http = require("http");
let port = 8000 ;
http.createServer(function(req,res){
    let url = (req.url).split('/');
    res.write(url[1]);
    res.end();
}).listen(port);