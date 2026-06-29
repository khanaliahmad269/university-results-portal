const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run(`CREATE TABLE projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    link TEXT NOT NULL
  )`);

  const stmt = db.prepare("INSERT INTO projects (title, description, link) VALUES (?, ?, ?)");
  stmt.run("Portfolio Website", "A personal portfolio website built with React and Node.js.", "https://example.com");
  stmt.run("E-commerce Platform", "An online store built with MERN stack.", "https://example.com");
  stmt.finalize();
});

module.exports = db;