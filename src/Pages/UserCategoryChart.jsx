import React, { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from "recharts";

const UserCategoryChart = ({ email }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!email) return;

    axios
      .get(`https://missionscic10-tau.vercel.app/my-services?email=${email}`)
      .then(res => {
        const services = res.data;

        // Count services by category
        const categoryCounts = {};
        services.forEach(service => {
          const cat = service.category || "Unknown";
          categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
        });

        // Convert to array for Recharts
        const chartData = Object.entries(categoryCounts).map(([category, count]) => ({
          category,
          count
        }));

        setData(chartData);
      })
      .catch(err => console.error("Error fetching services:", err));
  }, [email]);

  if (data.length === 0) return <p className="p-6 text-gray-500">No services found for this user.</p>;

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Services by Category</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#4f46e5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserCategoryChart;
