const http = require('http');

const server = http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Common navigation bar
    const navigation = `
        <nav>
            <a href="/">Home</a>
            <a href="/about">About Me</a>
            <a href="/skills">Skills</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
        </nav>
    `;

    // Common HTML structure
    const startHTML = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Stuti Saxena - Portfolio</title>

            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    background-color: #f4f4f4;
                    color: #333;
                }

                header {
                    background-color: #222;
                    color: white;
                    text-align: center;
                    padding: 30px;
                }

                nav {
                    background-color: #444;
                    text-align: center;
                    padding: 15px;
                }

                nav a {
                    color: white;
                    text-decoration: none;
                    margin: 0 15px;
                    font-weight: bold;
                }

                nav a:hover {
                    text-decoration: underline;
                }

                main {
                    max-width: 900px;
                    margin: 30px auto;
                    background-color: white;
                    padding: 30px;
                    border-radius: 10px;
                }

                h1, h2 {
                    color: #222;
                }

                li {
                    margin: 10px 0;
                }

                .project {
                    background-color: #f0f0f0;
                    padding: 15px;
                    margin: 15px 0;
                    border-radius: 8px;
                }

                footer {
                    text-align: center;
                    padding: 20px;
                    background-color: #222;
                    color: white;
                    margin-top: 30px;
                }

                a {
                    color: #0066cc;
                }
            </style>
        </head>

        <body>
            <header>
                <h1>Stuti Saxena</h1>
                <p>B.Tech Computer Science Engineering Student</p>
            </header>

            ${navigation}
    `;

    const endHTML = `
            <footer>
                <p>2026 Stuti Saxena | Portfolio</p>
            </footer>
        </body>
        </html>
    `;


    // HOME PAGE
    if (req.url === '/') {

        res.end(startHTML + `
            <main>
                <h2>Welcome to My Portfolio</h2>

                <p>
                    Hello! I am <strong>Stuti Saxena</strong>, a second-year
                    B.Tech Computer Science Engineering student at
                    ITM Skills University, School of Future Tech.
                </p>

                <p>
                    I am interested in software engineering and passionate
                    about learning, growing and creating something meaningful
                    through technology.
                </p>

                <p>
                    I started this journey with zero experience, but with
                    a 100% willingness to learn and make something out of it.
                    In one way or another, I never stop growing, learning
                    and evolving.
                </p>

                <h2>My Mindset</h2>

                <p>
                    Stoic, unbothered and undefeated.
                </p>

                <p>
                    I believe that whatever happens, happens, and the fates
                    will always find a way.
                </p>
            </main>
        ` + endHTML);

    }


    // ABOUT PAGE
    else if (req.url === '/about') {

        res.end(startHTML + `
            <main>
                <h2>About Me</h2>

                <p>
                    My name is <strong>Stuti Saxena</strong>.
                    I am a second-year B.Tech Computer Science Engineering
                    student studying at ITM Skills University, School of
                    Future Tech.
                </p>

                <p>
                    I am interested in software engineering and currently
                    exploring different areas of computer science and
                    development.
                </p>

                <p>
                    Although I started my journey with zero experience,
                    I have a strong willingness to learn and build.
                    I believe that growth comes from continuously learning,
                    improving and evolving.
                </p>

                <p>
                    My goal is to develop my technical skills, gain practical
                    experience and create meaningful software solutions.
                </p>

                <p>
                    <strong>Stoic. Unbothered. Undefeated.</strong>
                </p>
            </main>
        ` + endHTML);

    }


    // SKILLS PAGE
    else if (req.url === '/skills') {

        res.end(startHTML + `
            <main>
                <h2>My Skills</h2>

                <ul>
                    <li>Python</li>
                    <li>C++</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Scratch</li>
                    <li>Soft Skills</li>
                    <li>JavaScript</li>
                    <li>React JavaScript</li>
                    <li>Java Programming</li>
                    <li>DBMS & SQL - Currently Learning</li>
                    <li>Backend with Node.js - Currently Learning</li>
                </ul>
            </main>
        ` + endHTML);

    }


    // PROJECTS PAGE
    else if (req.url === '/projects') {

        res.end(startHTML + `
            <main>
                <h2>My Projects</h2>

                <div class="project">
                    <h3>Student Management System</h3>

                    <p>
                        A web application for managing student records.
                    </p>

                    <p>
                        <strong>Technologies Used:</strong>
                        HTML, CSS, JavaScript
                    </p>
                </div>
            </main>
        ` + endHTML);

    }


    // CONTACT PAGE
    else if (req.url === '/contact') {

        res.end(startHTML + `
            <main>
                <h2>Contact Details</h2>

                <p>
                    <strong>Email:</strong>
                    <a href="mailto:2025.stutis@isu.ac.in">
                        2025.stutis@isu.ac.in
                    </a>
                </p>

                <p>
                    <strong>LinkedIn:</strong>
                    <a href="https://www.linkedin.com/in/stuti-saxena44"
                       target="_blank">
                        linkedin.com/in/stuti-saxena44
                    </a>
                </p>

                <p>
                    <strong>GitHub:</strong>
                    <a href="https://github.com/stutisaxena44"
                       target="_blank">
                        github.com/stutisaxena44
                    </a>
                </p>
            </main>
        ` + endHTML);

    }


    // INVALID ROUTE
    else {

        res.writeHead(404, { 'Content-Type': 'text/html' });

        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>404 - Page Not Found</title>
            </head>

            <body style="font-family: Arial; text-align: center; padding: 50px;">

                <h1>404 - Page Not Found</h1>

                <p>The page you are looking for does not exist.</p>

                <a href="/">Go Back Home</a>

            </body>
            </html>
        `);
    }

});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});