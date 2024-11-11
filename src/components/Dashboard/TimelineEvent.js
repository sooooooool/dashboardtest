// src/components/Dashboard/TimelineEvent.js

import React from "react";

const TimelineEvent = ({ time, title, description, color, participants }) => {
  return (
    <div className="flex items-start space-x-4">
      {/* 시간 표시 */}
      <div className="w-20 text-right">
        <p className="text-sm font-semibold">{time}</p>
      </div>

      {/* 타임라인 아이콘과 이벤트 카드 */}
      <div className="flex flex-1 space-x-4">
        <div className="w-1 bg-blue-400"></div>
        <div className={`p-4 rounded-lg shadow-lg ${color} flex-1`}>
          <h3 className="font-semibold text-white">{title}</h3>
          <p className="text-sm text-white opacity-80">{description}</p>

          {/* 참여자 아이콘 */}
          <div className="flex mt-2 space-x-1">
            {participants.map((avatar, index) => (
              <img
                key={index}
                src={avatar}
                alt="participant"
                className="w-6 h-6 border-2 border-white rounded-full"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineEvent;
