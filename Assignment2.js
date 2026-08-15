const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Student Portal</title>
        </head>
        <body>
        <p> _________________________</p> <br>
            <h1>Student Portal</h1><br>
        <p> _________________________</p> <br>
            <p>Name: John Doe</p>
            <p>Course: Full Stack Development</p>
            <p>College: XYZ College</p>
            <p>Welcome to our Node.js application.</p>
        </body>
        </html>
    `);
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});