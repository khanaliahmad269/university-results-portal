const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// Mock results data
let results = [
  { id: 1, student_id: 1, subject: 'Math', grade: 'A', semester: 'Fall 2023' },
  { id: 2, student_id: 1, subject: 'Science', grade: 'B', semester: 'Fall 2023' }
];

router.get('/', auth, (req, res) => {
  const studentResults = results.filter(result => result.student_id === req.user.id);
  res.json({ results: studentResults });
});

router.post('/', auth, (req, res) => {
  if (req.user.role !== 'staff') {
    return res.status(403).json({ message: 'Access denied' });
  }
  const { student_id, subject, grade, semester } = req.body;
  const newResult = { id: results.length + 1, student_id, subject, grade, semester };
  results.push(newResult);
  res.json({ message: 'Result posted successfully' });
});

module.exports = router;