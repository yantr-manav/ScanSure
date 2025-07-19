import { useEffect, useState } from 'react';
import API from '../api/axios'; // path to your axios instance

function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.get('/users/')
      .then(res => setUsers(res.data))
      .catch(err => console.error('API error:', err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Registered Users</h1>
      <ul className="space-y-2">
        {users.map(user => (
          <li key={user.id} className="p-2 bg-gray-100 rounded">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
