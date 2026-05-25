const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Mock user data
const users = [
  { id: 1, username: 'student', password: '$2b$10$...', role: 'student' },
  { id: 2, username: 'staff', password: '$2b$10$...', role: 'staff' },
  { id: 3, username: 'admin', password: '$2b$10$...', role: 'admin' }
];

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, role: user.role });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;