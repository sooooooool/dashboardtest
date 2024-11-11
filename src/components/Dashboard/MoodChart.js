
import React from 'react';

const MoodChart = ({ moodData }) => {
  return (
    <div className="flex justify-around items-end h-64 p-4 bg-base-200 rounded-lg shadow-md">
      {moodData.map((data, index) => (
        <div
          key={index}
          className={`w-12 flex items-end justify-center text-center text-xs font-bold ${data.mood} rounded-t-lg`}
          style={{ height: `${data.value * 10}%` }}
        >
          <span className="block bg-white text-black p-1 rounded-md -mb-6">
            {data.value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default MoodChart;
