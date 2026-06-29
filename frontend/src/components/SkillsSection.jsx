import React from 'react';

function SkillsSection() {
  const skills = ['JavaScript', 'React', 'Node.js', 'Express', 'Tailwind CSS'];

  return (
    <section className="bg-white p-8 shadow-md">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <ul className="list-disc pl-5">
        {skills.map(skill => (
          <li key={skill} className="mb-2">{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default SkillsSection;