// src/components/Dashboard/MoodChart.tsx

import React from "react";

interface MoodData {
  mood: string;
  value: number;
}

interface MoodChartProps {
  moodData: MoodData[];
}

const MoodChart: React.FC<MoodChartProps> = ({ moodData }) => {
  return (
    <div className="flex items-end justify-around h-64 p-4 rounded-lg shadow-md bg-base-200">
      {moodData.map((data, index) => (
        <div
          key={index}
          className={`w-12 flex items-end justify-center text-center text-xs font-bold ${data.mood} rounded-t-lg`}
          style={{ height: `${data.value * 10}%` }}
        >
          <span className="block p-1 -mb-6 text-black bg-white rounded-md">
            {data.value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default MoodChart;
