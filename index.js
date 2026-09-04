const http = require("http");

const PORT = process.env.PORT || 3000;
const VERSION = process.env.VERSION || "1.0";

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`
        <html>
        <body style="font-family: sans-serif; text-align: center; margin-top: 100px;">
            <h1>Node.js GitOps Demo</h1>
            <h2>Version ${VERSION}</h2>
        </body>
        </html>
    `);
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});