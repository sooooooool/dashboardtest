// src/components/Dashboard/EarningsChart.tsx

import React from "react";

const EarningsChart: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="mb-4 text-lg font-semibold">Earnings</h3>
      <div className="h-48 bg-gray-200 rounded-lg">
        {/* 차트 라이브러리의 차트 컴포넌트를 여기에 추가할 수 있습니다 */}
        <p className="mt-16 text-center text-gray-500">Chart Placeholder</p>
      </div>
    </div>
  );
};

export default EarningsChart;
