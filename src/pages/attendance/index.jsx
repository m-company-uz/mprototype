import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, Calendar, Clock } from "lucide-react";

const Attendance = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState("Month");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [attendanceDetails, setAttendanceDetails] = useState({
    comeTime: "",
    leaveTime: "",
    totalHours: "",
    request: "",
    comment: "",
  });

  // Hozirgi oy uchun ma'lumotlar
  const generateCurrentMonthData = () => {
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const daysInMonth = new Date(year, month, 0).getDate();

    const data = {};
    const today = new Date();

    for (let day = 1; day <= daysInMonth; day++) {
      const dateKey = `${year}-${month}-${day}`;
      const currentDay = new Date(year, month - 1, day);

      const dayOfWeek = currentDay.getDay();
      if (dayOfWeek === 0 || dayOfWeek === 6) {
        data[dateKey] = "Holiday";
      } else {
        if (currentDay < today) {
          const statuses = [
            "Present",
            "Present",
            "Present",
            "Late",
            "WFH",
            "On Leave",
            "Absent",
          ];
          const randomStatus =
            statuses[Math.floor(Math.random() * statuses.length)];
          data[dateKey] = randomStatus;
        } else if (currentDay.toDateString() === today.toDateString()) {
          data[dateKey] = "Present";
        } else {
          data[dateKey] = null;
        }
      }
    }

    return data;
  };

  const [attendanceData, setAttendanceData] = useState({});

  useEffect(() => {
    setAttendanceData(generateCurrentMonthData());
  }, []);

  const statusColors = {
    Present: "bg-green-500 hover:bg-green-600",
    Absent: "bg-red-400 hover:bg-red-500",
    Holiday: "bg-gray-400 hover:bg-gray-500",
    "On Leave": "bg-blue-400 hover:bg-blue-500",
    Excused: "bg-purple-500 hover:bg-purple-600",
    Late: "bg-yellow-400 hover:bg-yellow-500",
    WFH: "bg-blue-700 hover:bg-blue-800",
    INP: "bg-gray-600 hover:bg-gray-700",
  };

  const statusShort = {
    Present: "P",
    Absent: "A",
    Holiday: "H",
    "On Leave": "L",
    Excused: "E",
    Late: "Lt",
    WFH: "WFH",
    INP: "INP",
  };

  const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const daysOfWeekShort = ["M", "T", "W", "T", "F", "S", "S"];

  const requestOptions = [
    "Leave Request",
    "Permission Request",
    "Overtime Request",
    "WFH Request",
    "Other",
  ];

  const getMonthData = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();

    let startDay = firstDay.getDay();
    startDay = startDay === 0 ? 6 : startDay - 1;

    const weeks = [];
    let currentWeek = new Array(7).fill(null);
    let dayCounter = 1;

    for (let i = startDay; i < 7 && dayCounter <= daysInMonth; i++) {
      currentWeek[i] = dayCounter++;
    }
    weeks.push(currentWeek);

    while (dayCounter <= daysInMonth) {
      currentWeek = new Array(7).fill(null);
      for (let i = 0; i < 7 && dayCounter <= daysInMonth; i++) {
        currentWeek[i] = dayCounter++;
      }
      weeks.push(currentWeek);
    }

    return weeks;
  };

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  const getAttendanceStatus = (day) => {
    if (!day) return null;
    const dateKey = `${currentDate.getFullYear()}-${
      currentDate.getMonth() + 1
    }-${day}`;
    return attendanceData[dateKey] || null;
  };

  const handleStatusClick = (day, status) => {
    if (status) {
      setSelectedDate({
        day,
        month: currentDate.getMonth() + 1,
        year: currentDate.getFullYear(),
        formatted: `${currentDate.getFullYear()}-${
          currentDate.getMonth() + 1
        }-${day}`,
      });
      setSelectedStatus(status);

      const today = new Date();
      const selected = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day
      );
      const isToday = selected.toDateString() === today.toDateString();

      setAttendanceDetails({
        comeTime: isToday
          ? new Date().getHours().toString().padStart(2, "0") + ":00"
          : "09:00",
        leaveTime: isToday
          ? (new Date().getHours() + 1).toString().padStart(2, "0") + ":00"
          : "18:00",
        totalHours: "8",
        request: "",
        comment: "",
      });

      setModalOpen(true);
    }
  };

  const handleSubmit = () => {
    console.log("Attendance details submitted:", {
      date: selectedDate.formatted,
      status: selectedStatus,
      details: attendanceDetails,
      submittedAt: new Date().toISOString(),
    });

    setAttendanceData((prev) => ({
      ...prev,
      [selectedDate.formatted]: selectedStatus,
    }));

    alert("Attendance details submitted successfully!");
    handleCloseModal();
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedDate(null);
    setSelectedStatus("");
    setAttendanceDetails({
      comeTime: "",
      leaveTime: "",
      totalHours: "",
      request: "",
      comment: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAttendanceDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (e) => {
    const [year, month, day] = e.target.value.split("-");
    setSelectedDate({
      day: parseInt(day),
      month: parseInt(month),
      year: parseInt(year),
      formatted: e.target.value,
    });

    const dateKey = `${year}-${parseInt(month)}-${parseInt(day)}`;
    setSelectedStatus(attendanceData[dateKey] || "");
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthNamesShort = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const weeks = getMonthData();

  return (
    <div className="py-2 md:py-4 lg:py-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-4 md:mb-6">
          <h3 className="text-[18px] md:text-[26px] lg:text-[32px] font-bold text-[#0A1629]">
            Attendance
          </h3>
        </div>

        <div className="p-3 bg-white rounded-[16px]">
          <div className="bg-white border border-[#B9B9B9] rounded-2xl shadow-lg p-3 md:p-6">
            {/* Calendar Controls */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4 md:mb-6">
              <div className="flex items-center w-full md:w-auto">
                <button
                  onClick={goToToday}
                  className="text-sm md:text-[14px] font-semibold text-[#202224]"
                >
                  Today
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 md:gap-4 w-full md:w-auto">
                <button
                  onClick={() => navigateMonth(-1)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Previous month"
                >
                  <ChevronLeft className="w-5 h-5 text-[#565656]" />
                </button>

                <h3 className="text-xl md:text-[24px] font-bold text-[#202224] text-center">
                  <span className="hidden md:inline">
                    {monthNames[currentDate.getMonth()]}
                  </span>
                  <span className="md:hidden">
                    {monthNamesShort[currentDate.getMonth()]}
                  </span>{" "}
                  {currentDate.getFullYear()}
                </h3>

                <button
                  onClick={() => navigateMonth(1)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Next month"
                >
                  <ChevronRight className="w-5 h-5 text-[#565656]" />
                </button>
              </div>

              <div className="flex border border-gray-300 rounded-[12px] overflow-hidden w-full md:w-auto">
                {["Day", "Week", "Month"].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setViewMode(mode)}
                    className={`px-3 md:px-4 py-2 text-xs md:text-sm font-medium transition-colors flex-1 md:flex-none ${
                      viewMode === mode
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="border border-[#F1F4F9] rounded-xl overflow-hidden">
              {/* Days of week header */}
              <div className="grid grid-cols-7 bg-[#F1F4F9] border-b border-gray-200">
                {daysOfWeek.map((day, index) => (
                  <div key={day} className="p-2 md:p-3 text-center">
                    <span className="hidden sm:inline text-[14px] font-bold text-[#202224]">
                      {day}
                    </span>
                    <span className="sm:hidden text-xs font-bold text-[#202224]">
                      {daysOfWeekShort[index]}
                    </span>
                  </div>
                ))}
              </div>

              {/* Calendar days */}
              {weeks.map((week, weekIndex) => (
                <div
                  key={weekIndex}
                  className="grid grid-cols-7 border-b border-gray-200 last:border-b-0"
                >
                  {week.map((day, dayIndex) => {
                    const status = getAttendanceStatus(day);
                    const today = new Date();
                    const isToday =
                      day &&
                      currentDate.getMonth() === today.getMonth() &&
                      currentDate.getFullYear() === today.getFullYear() &&
                      day === today.getDate();

                    return (
                      <div
                        key={dayIndex}
                        className={`min-h-[70px] sm:min-h-[90px] p-1 sm:p-2 border-r border-gray-200 last:border-r-0 ${
                          !day ? "bg-gray-50" : "bg-white"
                        }`}
                      >
                        {day && (
                          <div className="h-full flex flex-col">
                            {/* Day number */}
                            <div className="flex justify-between items-start mb-1">
                              <span
                                className={`text-xs sm:text-sm font-medium ${
                                  isToday
                                    ? "bg-blue-600 text-white w-6 h-6 flex items-center justify-center rounded-full"
                                    : "text-gray-700"
                                }`}
                              >
                                {day}
                              </span>
                            </div>

                            {/* Attendance status */}
                            <div className="flex-grow flex items-center justify-center">
                              {status ? (
                                <button
                                  onClick={() => handleStatusClick(day, status)}
                                  className={`w-full h-full min-h-[40px] sm:min-h-[50px] rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-[1.02] ${statusColors[status]}`}
                                  title={status}
                                >
                                  <span className="text-white font-medium">
                                    <span className="hidden sm:inline">
                                      {status}
                                    </span>
                                    <span className="sm:hidden text-xs">
                                      {statusShort[status]}
                                    </span>
                                  </span>
                                </button>
                              ) : (
                                <div className="w-full h-full min-h-[40px] sm:min-h-[50px] rounded-lg border border-dashed border-gray-300 flex items-center justify-center">
                                  <span className="text-xs text-gray-400">
                                    <span className="hidden sm:inline">
                                      No Data
                                    </span>
                                    <span className="sm:hidden">-</span>
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="bg-white rounded-[20px] shadow-xl w-full max-w-[500px] flex flex-col max-h-[95vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex justify-between items-center px-4 sm:px-6 py-4">
              <h3 className="text-sm sm:text-[16px] font-bold text-[#000000]">
                Attendance Details
              </h3>
              <button
                onClick={handleCloseModal}
                className="p-1 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 flex flex-col gap-4 overflow-y-auto hide-scrollbar">
              {/* Date & Status */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
                <label className="w-full sm:w-1/3 text-black text-xs sm:text-[14px] font-medium">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={
                    selectedDate
                      ? `${selectedDate.year}-${String(
                          selectedDate.month
                        ).padStart(2, "0")}-${String(selectedDate.day).padStart(
                          2,
                          "0"
                        )}`
                      : ""
                  }
                  onChange={handleDateChange}
                  className="w-full sm:w-2/3 p-2 sm:p-3 border border-[#E5E5E5] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                />
              </div>

              {/* Form Fields */}
              <div className="flex flex-col gap-4">
                {/* Come Time */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                  <label className="w-full sm:w-1/3 text-black text-xs sm:text-[14px] font-medium">
                    Come Time
                  </label>
                  <input
                    type="time"
                    name="comeTime"
                    value={attendanceDetails.comeTime}
                    onChange={handleInputChange}
                    className="w-full sm:w-2/3 p-2 sm:p-3 border border-[#E5E5E5] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                  />
                </div>

                {/* Leave Time */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                  <label className="w-full sm:w-1/3 text-black text-xs sm:text-[14px] font-medium">
                    Leave Time
                  </label>
                  <input
                    type="time"
                    name="leaveTime"
                    value={attendanceDetails.leaveTime}
                    onChange={handleInputChange}
                    className="w-full sm:w-2/3 p-2 sm:p-3 border border-[#E5E5E5] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                  />
                </div>

                {/* Total Hours */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                  <label className="w-full sm:w-1/3 text-black text-xs sm:text-[14px] font-medium">
                    Total Hours
                  </label>
                  <input
                    type="number"
                    name="totalHours"
                    value={attendanceDetails.totalHours}
                    onChange={handleInputChange}
                    min="0"
                    max="24"
                    step="0.5"
                    placeholder="Enter hours"
                    className="w-full sm:w-2/3 p-2 sm:p-3 border border-[#E5E5E5] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                  />
                </div>

                {/* Requests */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                  <label className="w-full sm:w-1/3 text-black text-xs sm:text-[14px] font-medium">
                    Requests
                  </label>
                  <select
                    name="request"
                    value={attendanceDetails.request}
                    onChange={handleInputChange}
                    className="w-full sm:w-2/3 p-2 sm:p-3 border border-[#E5E5E5] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                  >
                    <option value="">Select request type</option>
                    {requestOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Comment */}
                <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3">
                  <label className="w-full sm:w-1/3 text-black text-xs sm:text-[14px] font-medium">
                    Comment
                  </label>
                  <textarea
                    name="comment"
                    value={attendanceDetails.comment}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="Add your comment here..."
                    className="w-full sm:w-2/3 p-2 border border-[#E5E5E5] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-3 mt-2">
                <button
                  onClick={handleSubmit}
                  className="w-full sm:flex-1 px-4 sm:px-6 py-2 sm:py-3 bg-[#0061FE] text-white rounded-[8px] hover:bg-[#4A7DFF] transition-colors font-medium text-sm sm:text-base"
                >
                  Submit Request
                </button>
                <button
                  onClick={handleCloseModal}
                  className="w-full sm:flex-1 px-4 sm:px-6 py-2 sm:py-3 text-gray-700 border border-[#E5E5E5] rounded-[8px] hover:bg-gray-50 transition-colors font-medium text-sm sm:text-base"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Attendance;
