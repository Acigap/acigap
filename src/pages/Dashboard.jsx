import React from 'react';
import { Link } from "react-router-dom";

const usageData = [
  { label: "จำนวนผู้ใช้งาน", value: 1200 },
  { label: "จำนวนธุรกรรมวันนี้", value: 340 },
  { label: "ยอดโอนรวม (บาท)", value: 150000 },
];

const Dashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">สรุปการใช้งานแอป</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {usageData.map((item) => (
            <div key={item.label} className="bg-white rounded shadow p-4 text-center">
              <div className="text-3xl font-bold text-blue-600">{item.value}</div>
              <div className="text-gray-600 mt-2">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
      <nav className="mb-4">
        <Link to="/" className="mr-4 text-blue-500 hover:underline">หน้าหลัก</Link>
        <Link to="/store" className="mr-4 text-blue-500 hover:underline">Store</Link>
        <Link to="/history" className="mr-4 text-blue-500 hover:underline">History</Link>
        <Link to="/transfer" className="mr-4 text-blue-500 hover:underline">Transfer</Link>
      </nav>
      <p>Welcome to your dashboard! Here you can see an overview of your activity.</p>
    </div>
  );
};

export default Dashboard;
