import React from 'react';

function ProfileInfo({ user }) {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Role:</strong> {user.role}</p>
    </div>
  );
}

export default ProfileInfo;