import React from 'react';
import ResultList from '../components/ResultList';
import PostResultForm from '../components/PostResultForm';

function Dashboard() {
  return (
    <div className="container mx-auto p-4">
      <ResultList />
      <PostResultForm />
    </div>
  );
}

export default Dashboard;