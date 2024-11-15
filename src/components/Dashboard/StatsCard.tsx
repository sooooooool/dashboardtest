// src/components/Dashboard/StatsCard.tsx

import React from "react";

interface StatsCardProps {
  title: string;
  value: string | number;
  percentage: string;
  color: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  percentage,
  color,
}) => {
  return (
    <div className={`p-4 rounded-lg shadow-md ${color}`}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
      <span className="text-sm">{percentage}</span>
    </div>
  );
};

export default StatsCard;
