import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ isLoggedIn, userRole }) {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg font-bold">University Portal</Link>
        <div>
          <Link to="/" className="mr-4">Home</Link>
          {isLoggedIn ? (
            <>
              <Link to="/dashboard" className="mr-4">Dashboard</Link>
              <Link to="/profile" className="mr-4">Profile</Link>
              {userRole === 'admin' && <Link to="/admin" className="mr-4">Admin</Link>}
              <button className="bg-red-500 px-3 py-1 rounded">Logout</button>
            </>
          ) : (
            <Link to="/login" className="bg-green-500 px-3 py-1 rounded">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;