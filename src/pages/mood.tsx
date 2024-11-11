// src/pages/MoodPage.tsx

import React from "react";
import Layout from "../components/Layout/Layout";
import MoodChart from "../components/Dashboard/MoodChart";
import moodData from "../data/moodData.json";

const MoodPage: React.FC = () => {
  return (
    <Layout>
      <h1 className="mb-8 text-3xl font-bold text-center">Mood Chart</h1>
      <MoodChart moodData={moodData} />
    </Layout>
  );
};

export default MoodPage;
