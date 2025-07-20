import { useEffect, useState } from "react";
import API from "../api/axios";

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/user/verify-status/") // Example API
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h2 className="text-2xl font-bold mb-4">Verification Status</h2>
      <ul className="space-y-2">
        {data.map((item, index) => (
          <li key={index} className="bg-white shadow rounded p-4">
            <p><strong>Name:</strong> {item.name}</p>
            <p><strong>Status:</strong> {item.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
