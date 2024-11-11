// src/pages/calendar.tsx

import React from "react";
import Layout from "../components/Layout/Layout";
import Calendar from "../components/Dashboard/Calendar";

const CalendarPage: React.FC = () => {
  return (
    <Layout>
      <div className="p-6">
        <Calendar />
      </div>
    </Layout>
  );
};

export default CalendarPage;
