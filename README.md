```markdown
# Node.js Backend Assignments — Report

**Name:** Stuti Saxena  
**Roll Number:** 024  
**Cohort:** Larry Page  

## Introduction

This repository contains five Node.js assignments completed as part of the Backend Development coursework. The assignments progressively cover the fundamentals of creating HTTP servers, handling requests and responses, routing, returning HTML and JSON data, and building a simple portfolio website using Node.js.

All assignments use the built-in Node.js `http` module and run on port 3000.

---

## Assignment 1 — Basic HTTP Server

The first assignment focuses on creating a basic HTTP server using Node.js.

### Features
- Uses the `http` module.
- Creates a server using `http.createServer()`.
- Runs the server on port 3000.
- Sends a welcome message to the browser.
- Displays a message in the terminal when the server starts.

### Browser Output

```text
Welcome to Node.js Server
```

### Terminal Output

```text
Server is running on http://localhost:3000
```

This assignment introduces the basic concepts of HTTP server creation, server listening, requests, and responses.

---

## Assignment 2 — HTML Response Server

The second assignment builds upon the basic HTTP server by returning an HTML page instead of plain text.

### Features
- Creates an HTTP server using Node.js.
- Sets the response content type to HTML.
- Displays a Student Portal heading.
- Shows student name, course, and college information.
- Includes a welcome paragraph.
- Uses HTML elements to structure the page.
- Includes horizontal lines above and below the Student Portal heading.

### Page Content

```text
Student Portal

Name: John Doe
Course: Full Stack Development
College: XYZ College

Welcome to our Node.js application.
```

This assignment introduces HTML responses and HTTP response headers.

---

## Assignment 3 — Student JSON API

The third assignment introduces a simple REST-like API endpoint.

### Features
- Creates an HTTP server using Node.js.
- Uses the `/student` route.
- Returns student information in JSON format.
- Uses the appropriate `application/json` content type.
- Returns a 404 error for routes that do not exist.

### `/student` Response

```json
{
  "id": 101,
  "name": "John",
  "course": "BCA",
  "semester": 4,
  "city": "Mumbai"
}
```

### Invalid Route

```text
404 - Page Not Found
```

This assignment demonstrates JSON responses, routing, and HTTP status codes.

---

## Assignment 4 — Route Handling Server

The fourth assignment focuses on routing and handling multiple URLs.

### Routes

| Route | Response |
|---|---|
| `/` | Welcome to Home Page |
| `/about` | About Us |
| `/contact` | Contact Information |
| `/services` | Our Services |
| Any other route | 404 - Page Not Found |

Each route produces a different response depending on the requested URL.

This assignment demonstrates URL handling, multiple routes, routing logic, and HTTP status codes.

---

## Assignment 5 — Personal Portfolio Server

The fifth assignment combines the concepts learned in the previous assignments to create a simple personal portfolio website.

The portfolio is created using Node.js, the HTTP module, HTML, and CSS.

### Pages

- **Home** — Introduction and personal information.
- **About Me** — Educational background and career interests.
- **Skills** — Technical and soft skills.
- **Projects** — Details about the Student Management System project.
- **Contact** — Email, LinkedIn, and GitHub information.

### Additional Features

- Navigation links are available on every page.
- Each route returns an HTML page.
- Invalid routes display a 404 - Page Not Found message.
- Basic CSS is used to make the portfolio organized and readable.

This assignment demonstrates routing, HTML responses, HTTP servers, and multiple endpoints together in one project.

---

## Technologies Used

- Node.js
- JavaScript
- HTTP Module
- HTML5
- CSS3
- JSON

---

## Learning Outcomes

Through these five assignments, I learned how to:

- Create and run a Node.js HTTP server.
- Handle HTTP requests and responses.
- Work with plain text, HTML, and JSON responses.
- Create and manage multiple routes.
- Handle invalid URLs using HTTP 404 status codes.
- Set appropriate HTTP response headers.
- Build a basic multi-page website using Node.js.
- Combine backend routing with HTML and CSS to create a personal portfolio.

---

## Conclusion

These five assignments provided a step-by-step introduction to backend development with Node.js. Starting with a basic HTTP server and progressing to routing, APIs, and a personal portfolio helped build an understanding of how Node.js can be used to handle web requests and create server-side applications.
```
