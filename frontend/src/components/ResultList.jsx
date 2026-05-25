import React from 'react';

function ResultList({ results }) {
  return (
    <div className="bg-white p-6 rounded shadow mb-4">
      <h2 className="text-2xl font-bold mb-4">Your Results</h2>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Subject</th>
            <th className="px-4 py-2">Grade</th>
            <th className="px-4 py-2">Semester</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr key={result.id}>
              <td className="border px-4 py-2">{result.subject}</td>
              <td className="border px-4 py-2">{result.grade}</td>
              <td className="border px-4 py-2">{result.semester}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResultList;