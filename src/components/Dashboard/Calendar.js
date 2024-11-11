// src/components/Dashboard/Calendar.js

import React, { useState } from "react";
import Timeline from "./Timeline";
import {
  format,
  addDays,
  startOfWeek,
  addWeeks,
  subWeeks,
  isToday,
} from "date-fns";
import { ko } from "date-fns/locale";
import { FiCalendar } from "react-icons/fi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Calendar = () => {
  const [isMiniCalendar, setIsMiniCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [weekStartDate, setWeekStartDate] = useState(
    startOfWeek(new Date(), { locale: ko })
  );

  // 현재 월 표시를 위한 변수
  const currentMonth = format(selectedDate, "M월", { locale: ko });

  // 날짜 선택 함수
  const handleDateClick = (date) => {
    setSelectedDate(date);
    setWeekStartDate(startOfWeek(date, { locale: ko }));
    setIsMiniCalendar(true);
  };

  // 미니 캘린더와 전체 캘린더 전환
  const toggleCalendarView = () => {
    setIsMiniCalendar(!isMiniCalendar);
  };

  // 이전 주로 이동
  const goToPreviousWeek = () => {
    setWeekStartDate(subWeeks(weekStartDate, 1));
  };

  // 다음 주로 이동
  const goToNextWeek = () => {
    setWeekStartDate(addWeeks(weekStartDate, 1));
  };

  // 주 단위 날짜 배열 생성
  const getWeekDates = () => {
    return Array.from({ length: 7 }, (_, i) => addDays(weekStartDate, i));
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">달력</h3>
        <span className="font-semibold text-md">{currentMonth}</span>{" "}
        {/* 현재 월 표시 */}
        <button
          onClick={toggleCalendarView}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
        >
          <FiCalendar size={20} />
        </button>
      </div>

      {/* 미니 캘린더 */}
      {isMiniCalendar ? (
        <div className="flex items-center justify-center space-x-2">
          <button
            onClick={goToPreviousWeek}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <FaArrowLeft />
          </button>
          <div className="flex items-center space-x-2">
            {getWeekDates().map((date, index) => (
              <div
                key={index}
                onClick={() => setSelectedDate(date)}
                className={`p-2 rounded-lg cursor-pointer ${
                  format(date, "yyyy.MM.dd", { locale: ko }) ===
                  format(selectedDate, "yyyy.MM.dd", { locale: ko })
                    ? "bg-purple-500 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                <p className="text-sm font-semibold">
                  {format(date, "EEE", { locale: ko })}
                </p>
                <p className="text-lg">{format(date, "dd", { locale: ko })}</p>
              </div>
            ))}
          </div>
          <button
            onClick={goToNextWeek}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <FaArrowRight />
          </button>
        </div>
      ) : (
        // 전체 캘린더
        <div className="grid grid-cols-7 gap-2 mb-6 text-center">
          {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
            <div key={day} className="font-bold text-gray-600">
              {day}
            </div>
          ))}
          {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => {
            const date = new Date(2024, 10, day); // 2024년 11월로 설정 (11월은 10으로 설정)
            return (
              <div
                key={day}
                onClick={() => handleDateClick(date)}
                className={`p-2 bg-gray-100 rounded-md cursor-pointer ${
                  isToday(date) ? "bg-purple-500 text-white" : ""
                }`}
              >
                {day}
              </div>
            );
          })}
        </div>
      )}

      {/* 타임라인 */}
      <Timeline />
    </div>
  );
};

export default Calendar;
