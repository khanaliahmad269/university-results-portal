import React, { useState } from 'react';
import axios from 'axios';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/contact', formData)
      .then(response => setStatus('Message sent successfully!'))
      .catch(error => setStatus('Error sending message.'));
  };

  return (
    <section className="bg-white p-8 shadow-md">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="message">Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" required></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">Send</button>
      </form>
      {status && <p className="mt-4">{status}</p>}
    </section>
  );
}

export default ContactForm;