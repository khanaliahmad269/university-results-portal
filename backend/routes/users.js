const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const auth = require('../middleware/auth');

// Mock user data
let users = [
  { id: 1, username: 'student', password: '$2b$10$...', role: 'student' },
  { id: 2, username: 'staff', password: '$2b$10$...', role: 'staff' },
  { id: 3, username: 'admin', password: '$2b$10$...', role: 'admin' }
];

router.get('/', auth, (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied' });
  }
  res.json({ users });
});

router.post('/', auth, async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied' });
  }
  const { username, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { id: users.length + 1, username, password: hashedPassword, role };
  users.push(newUser);
  res.json({ message: 'User created successfully' });
});

module.exports = router;