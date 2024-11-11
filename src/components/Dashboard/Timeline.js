// src/components/Dashboard/Timeline.js

import React from "react";
import TimelineEvent from "./TimelineEvent";

const events = [
  {
    time: "Jun",
    title: "Design Meeting",
    description: "Discuss project requirements and UX flow",
    color: "bg-blue-500",
    participants: ["/avatars/user1.png", "/avatars/user2.png"],
  },
  {
    time: "July",
    title: "Weekly General Meeting",
    description: "Team update and performance check",
    color: "bg-orange-500",
    participants: ["/avatars/user3.png", "/avatars/user4.png"],
  },
  {
    time: "August",
    title: "UX/UI Design Project",
    description: "Initial project design and UX discussion",
    color: "bg-pink-500",
    participants: [
      "/avatars/user1.png",
      "/avatars/user2.png",
      "/avatars/user3.png",
    ],
  },
  {
    time: "September",
    title: "View Project Examples",
    description: "Analyze project examples for better design",
    color: "bg-green-500",
    participants: ["/avatars/user4.png", "/avatars/user5.png"],
  },
];

const Timeline = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-xl font-semibold">Daily Tasks</h2>
      <div className="space-y-6">
        {events.map((event, index) => (
          <TimelineEvent
            key={index}
            time={event.time}
            title={event.title}
            description={event.description}
            color={event.color}
            participants={event.participants}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
