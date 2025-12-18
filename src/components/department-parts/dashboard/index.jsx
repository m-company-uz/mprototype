import { ChartLine } from "lucide-react";
import DepartmentNavbar from "../department-modal/navbar";
import { AlertCircle, TrendingUp, TrendingDown } from "lucide-react";
import { AudioWaveform } from "lucide-react";

const Dashboard = () => {
  return (
    <div >
      <DepartmentNavbar />

      <div className="w-full mx-auto my-5 space-y-6">
        {/* Project Health Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-sm md:text-[24px] font-semibold text-black mb-4 flex items-center gap-2">
            <span className="text-blue-600">📊</span> Project Health
          </h3>

          <div className="space-y-3">
            {/* YAP Buildout Demo */}
            <div className="space-y-2 bg-[#E9FDF1] p-4 rounded-[8px]">
              <div className="flex justify-between items-center">
                <span className="text-[16px] font-medium text-black">
                  TUIT Students' Union
                </span>
              </div>
              <button className="text-[12px] font-medium text-white rounded-[4px] px-3 max-w-[81px] w-full py-2 bg-[#00AF42]">
                On Track
              </button>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-green-500 h-3 rounded-full"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>

            {/* YAP Academic Demo */}
            <div className="space-y-2 bg-[#FFF4F6] p-4 rounded-[8px]">
              <div className="flex justify-between items-center">
                <span className="text-[16px] font-medium text-black">
                  TUIT Students' Union
                </span>
              </div>
              <button className="text-[12px] font-medium text-white rounded-[4px] px-3 max-w-[81px] w-full py-2 bg-[#EF4445]">
                Blocked
              </button>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-red-500 h-3 rounded-full"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>

            {/* YAP Jumpstart Demo */}
            <div className="space-y-2 bg-[#FFFAEA] p-4 rounded-[8px]">
              <div className="flex justify-between items-center">
                <span className="text-[16px] font-medium text-black">
                  TUIT Students' Union
                </span>
              </div>
              <button className="text-[12px] font-medium text-white rounded-[4px] px-3 max-w-[81px] w-full py-2 bg-[#EBB30B]">
                Delayed
              </button>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-yellow-500 h-3 rounded-full"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottlenecks & Alerts Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-[24px] font-semibold text-black mb-4 flex items-center gap-2">
            <AlertCircle className="text-orange-500" size={24} /> Bottlenecks &
            Alerts
          </h3>

          <div className="space-y-3">
            {[
              {
                text: "Get Real Automation in Your Safe Pocket",
                date: "8:13 AM",
              },
              {
                text: "Get Real Automation in Your Safe Pocket",
                date: "8:13 AM",
              },
              {
                text: "Get Real Automation in Your Safe Pocket",
                date: "8:13 AM",
              },
            ].map((alert, index) => (
              <div
                key={index}
                className="flex justify-between rounded-[8px] items-center py-5 px-6 bg-[#4880FF]/15 border-b border-gray-100 last:border-0"
              >
                <span className="text-[16px] font-medium text-[#202224]">
                  {alert.text}
                </span>
                <span className="text-[16px] font-medium text-[#202224]">
                  {alert.date}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quality & Performance Metrics */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-[24px] font-semibold text-black mb-4 flex items-center gap-2">
            <ChartLine className="text-[#00AF42]" size={24} /> Quality &
            Performance Metrics
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              {
                label: "Bugs per release",
                value: "4.53",
                trend: "2.5% Up from yesterday",
              },
              {
                label: "Test coverage",
                value: "78%",
                trend: "3.1% Up from yesterday",
              },
              {
                label: "Uptime",
                value: "99.7%",
                trend: "0.7% Up from yesterday",
              },
              {
                label: "Innovation score",
                value: "82%",
                trend: "3.3% Up from yesterday",
              },
              {
                label: "Learning index",
                value: "75%",
                trend: "2.9% Up from yesterday",
              },
            ].map((metric, index) => (
              <div
                key={index}
                className="bg-[#4880FF]/10 text-center rounded-[8px] py-6 px-4 space-y-2"
              >
                <div className="text-[24px] text-[#6C6AFF] font-semibold">
                  {metric.label}
                </div>
                <div className="text-[28px] font-bold text-[#202224]">
                  {metric.value}
                </div>

                <div className="flex items-start gap-3 text-[16px] text-[#606060] justify-center">
                  <TrendingUp size={30} className="text-[#6C6AFF]" />

                  {(() => {
                    const [percent, ...rest] = metric.trend.split(" ");
                    return (
                      <>
                        <span className="text-[#6C6AFF] font-semibold">
                          {percent}
                        </span>
                        <span>{rest.join(" ")}</span>
                      </>
                    );
                  })()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Road Map Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-[24px] font-semibold text-black mb-4 flex items-center gap-2">
            <AudioWaveform size={24} className="text-[#E033FF]" /> Road Map
          </h3>

          <div className="relative h-64">
            {/* Chart Area */}
            <svg
              className="w-full h-full"
              viewBox="0 0 400 200"
              preserveAspectRatio="none"
            >
              {/* Grid lines */}
              <line
                x1="0"
                y1="50"
                x2="400"
                y2="50"
                stroke="#e5e7eb"
                strokeWidth="1"
              />
              <line
                x1="0"
                y1="100"
                x2="400"
                y2="100"
                stroke="#e5e7eb"
                strokeWidth="1"
              />
              <line
                x1="0"
                y1="150"
                x2="400"
                y2="150"
                stroke="#e5e7eb"
                strokeWidth="1"
              />

              {/* Area fills */}
              <path
                d="M 0 150 L 50 145 L 100 140 L 150 135 L 200 140 L 250 130 L 300 135 L 350 125 L 400 120 L 400 200 L 0 200 Z"
                fill="rgba(34, 211, 238, 0.3)"
              />
              <path
                d="M 0 80 L 50 85 L 100 75 L 150 70 L 200 80 L 250 70 L 300 75 L 350 65 L 400 60 L 400 200 L 0 200 Z"
                fill="rgba(96, 165, 250, 0.3)"
              />

              {/* Lines */}
              <polyline
                points="0,150 50,145 100,140 150,135 200,140 250,130 300,135 350,125 400,120"
                fill="none"
                stroke="#22d3ee"
                strokeWidth="2"
              />
              <polyline
                points="0,80 50,85 100,75 150,70 200,80 250,70 300,75 350,65 400,60"
                fill="none"
                stroke="#60a5fa"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Legend */}
          <div className="flex justify-center items-center gap-8 mt-5">
            <div className="flex items-center gap-5">
              <div className="relative w-10 h-[4px] bg-[#0080DA]">
                <span className="absolute left-1/2 -translate-x-1/2 -top-[4px] w-3 h-3 bg-[#0080DA] rounded-full"></span>
              </div>

              <div className="flex flex-col justify-center items-center gap-2">
                <p className="text-[24px] font-normal text-[#96A5B8]">
                  Last Month
                </p>
                <p className="text-[21px] font-medium text-[#222B45]">$53,504</p>
              </div>
            </div>

            <div className="bg-[#BDC9D3] h-[40px] w-1"></div>

            <div className="flex items-center gap-5">
              <div className="relative w-10 h-[4px] bg-[#07E098]">
                <span className="absolute left-1/2 -translate-x-1/2 -top-[4px] w-3 h-3 bg-[#07E098] rounded-full"></span>
              </div>
              <div className="flex flex-col justify-center items-center gap-2">
                <p className="text-[24px] font-normal text-[#96A5B8]">
                  This Month
                </p>
                <p className="text-[21px] font-medium text-[#222B45]">$54,524</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
