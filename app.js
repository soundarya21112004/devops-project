const http = require('http');

const server = http.createServer((req, res) => {
    res.write("Hello Machi! Webhook Working 🔥");
    res.end();
});

server.listen(3000, '0.0.0.0', () => {
    console.log("Server running on port 3000");
});
