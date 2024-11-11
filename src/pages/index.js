// src/pages/index.js

import React from "react";
import Layout from "../components/Layout/Layout";
import StatsCard from "../components/Dashboard/StatsCard";
import EarningsChart from "../components/Dashboard/EarningsChart";
import RecentActivities from "../components/Dashboard/RecentActivities";
import Calendar from "../components/Dashboard/Calendar";

const HomePage = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Conversion Rate"
          value="0.95%"
          percentage="+1.9%"
          color="bg-purple-100"
        />
        <StatsCard
          title="Unique Purchases"
          value="1,250"
          percentage="-0.5%"
          color="bg-green-100"
        />
        <StatsCard
          title="Avg. Order Value"
          value="$250.15"
          percentage="+0.4%"
          color="bg-blue-100"
        />
        <StatsCard
          title="Order Quantity"
          value="1,560"
          percentage="-2.3%"
          color="bg-red-100"
        />
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <EarningsChart />
        </div>
        <Calendar />
      </div>
      <div className="mt-6">
        <RecentActivities />
      </div>
    </Layout>
  );
};

export default HomePage;
