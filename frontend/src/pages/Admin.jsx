import React from 'react';
import UserManagement from '../components/UserManagement';
import ResultManagement from '../components/ResultManagement';

function Admin() {
  return (
    <div className="container mx-auto p-4">
      <UserManagement />
      <ResultManagement />
    </div>
  );
}

export default Admin;