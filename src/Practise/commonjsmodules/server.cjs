// const http = require('http');
const http = require('node:http');
// Instance of a server
const server = http.createServer((req, res) => {

    if(req.url === "/getData") {
        res.end("This is the data");
    }
    res.end("Hello world");
});

// server.listen(3010);




// server.listen(3010, () => {
//     console.log("Server running at http://localhost:3010");
// });

server.listen(3010, '0.0.0.0', () => {
    console.log("Server running at http://0.0.0.0:3010");
});