var http = require("http");
var url = require('url');

http.createServer((req, resp) => {
    resp.writeHead(200, { "Content-Type": "text/plain" });
    resp.write(req.url);

    var q = url.parse(req.url,true).query;
    console.log(q.F+''+q.L);
    resp.write(q.F+''+q.L);

    resp.end("Hello World Ok GGG.\n");
}).listen(8081);

console.log("Server running at http://127.0.0.1:8081/");