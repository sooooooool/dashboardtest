
import React from 'react';
import Layout from '../components/Layout/Layout';
import MoodChart from '../components/Dashboard/MoodChart';
import moodData from '../data/moodData.json';

const MoodPage = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-center mb-8">Mood Chart</h1>
      <MoodChart moodData={moodData} />
    </Layout>
  );
};

export default MoodPage;
