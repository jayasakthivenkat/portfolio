const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const projects = [
  {
    id: 1,
    title: "College Event Management System",
    description: "Web application for managing college events",
    tech_stack: "Python, HTML, CSS, MySQL"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Personal full stack portfolio website",
    tech_stack: "HTML, CSS, JavaScript, Node.js"
  }
];

app.get("/projects", (req, res) => {
  res.json(projects);
});

app.listen(5000, function () {
  console.log("Server running on port 5000");
});