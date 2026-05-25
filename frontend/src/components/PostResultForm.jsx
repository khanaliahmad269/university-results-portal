import React, { useState } from 'react';
import axios from 'axios';

function PostResultForm() {
  const [studentId, setStudentId] = useState('');
  const [subject, setSubject] = useState('');
  const [grade, setGrade] = useState('');
  const [semester, setSemester] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/results', { student_id: studentId, subject, grade, semester });
      console.log(response.data);
    } catch (error) {
      console.error('Failed to post result', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Post New Result</h2>
      <div className="mb-4">
        <label className="block mb-2">Student ID</label>
        <input
          type="text"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Subject</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Grade</label>
        <input
          type="text"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Semester</label>
        <input
          type="text"
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Post Result</button>
    </form>
  );
}

export default PostResultForm;