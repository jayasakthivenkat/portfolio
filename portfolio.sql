CREATE TABLE projects (
  id INTEGER PRIMARY KEY,
  title TEXT,
  description TEXT,
  tech_stack TEXT
);

INSERT INTO projects (title, description, tech_stack)
VALUES
(
'College Event Management System',
'Web application for managing college events',
'Python, HTML, CSS, MySQL'
),
(
'Portfolio Website',
'Personal full stack portfolio website',
'HTML, CSS, JavaScript, Node.js'
);

SELECT * FROM projects;