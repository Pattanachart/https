var http = require("http");
var url = require('url');

http.createServer((req, resp) => {
    resp.writeHead(200, { "Content-Type": "text/plain" });
    resp.write('req.url',req.url);


   

var q = url.parse(req.url,true).query;
    console.log(q)
 resp.end("Hello World Ok KKK.\n");

})
.listen(8081);

console.log("Server running at http://127.0.0.1:8081/");