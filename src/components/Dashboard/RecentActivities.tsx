// src/components/Dashboard/RecentActivities.tsx

import React from "react";

interface Activity {
  date: string;
  description: string;
}

const activities: Activity[] = [
  { date: "2025-07-25", description: "Completed a new order" },
  { date: "2025-07-24", description: "Updated profile information" },
  { date: "2025-07-23", description: "Added a new product" },
];

const RecentActivities: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="mb-4 text-lg font-semibold">Recent Activities</h3>
      <ul className="space-y-3">
        {activities.map((activity, index) => (
          <li key={index} className="flex items-center space-x-3">
            <div className="text-sm text-gray-500">{activity.date}</div>
            <p className="text-sm text-gray-700">{activity.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivities;
