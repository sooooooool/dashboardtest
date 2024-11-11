// src/pages/calendar.js

import React from "react";
import Layout from "../components/Layout/Layout";
import Calendar from "../components/Dashboard/Calendar";

const CalendarPage = () => {
  return (
    <Layout>
      <div className="p-6">
        <Calendar />
      </div>
    </Layout>
  );
};

export default CalendarPage;
