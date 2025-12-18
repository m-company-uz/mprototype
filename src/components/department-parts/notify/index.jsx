import { useState } from "react";
import DepartmentNavbar from "../department-modal/navbar";
import { Plus, X } from "lucide-react";
import { IoCalendarOutline } from "react-icons/io5";

const Notify = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Get Best Advertiser In Your Side Pocket",
      time: "Dec 27",
      priority: "High",
      bgColor: "bg-green-50",
      borderColor: "border-green-300",
    },
    {
      id: 2,
      title: "Get Best Advertiser In Your Side Pocket",
      time: "Today 11:30 am",
      priority: "Medium",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-300",
    },
    {
      id: 3,
      title: "Get Best Advertiser In Your Side Pocket",
      time: "Yesterday 22:00 pm",
      priority: "Low",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-300",
    },
    {
      id: 4,
      title: "Get Best Advertiser In Your Side Pocket",
      time: "Yesterday 22:00 pm",
      priority: "Low",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-300",
    },
    {
      id: 5,
      title: "Get Best Advertiser In Your Side Pocket",
      time: "Dec 27",
      priority: "High",
      bgColor: "bg-green-50",
      borderColor: "border-green-300",
    },
    {
      id: 6,
      title: "Get Best Advertiser In Your Side Pocket",
      time: "Yesterday 22:00 pm",
      priority: "Low",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-300",
    },
    {
      id: 7,
      title: "Get Best Advertiser In Your Side Pocket",
      time: "Today 11:30 am",
      priority: "Medium",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-300",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");

  const getPriorityStyles = (priority) => {
    switch (priority) {
      case "High":
        return {
          bg: "bg-[#37FB85]",
          border: "border-green-300",
          badge: "bg-[#37FB85] text-white",
        };
      case "Medium":
        return {
          bg: "bg-[#FF4C6D]",
          border: "border-pink-300",
          badge: "bg-[#FF4C6D] text-white",
        };
      case "Low":
        return {
          bg: "bg-[#FFCE33]",
          border: "border-yellow-300",
          badge: "bg-[#FFCE33] text-white",
        };
      default:
        return {};
    }
  };

  const handleAddNotification = () => {
    if (!title.trim()) return;

    const styles = getPriorityStyles(priority);

    const newNotification = {
      id: Date.now(),
      title,
      time: new Date().toLocaleString(),
      priority,
      bgColor: styles.bg,
      borderColor: styles.border,
    };

    setNotifications((prev) => [newNotification, ...prev]);
    setTitle("");
    setPriority("Medium");
    setIsModalOpen(false);
  };

  return (
    <div>
      <DepartmentNavbar />

      <div className="p-6 my-6 bg-[#FFFFFF] mt-6 rounded-[8px] shadow-sm">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Title */}
          <div className="flex items-center gap-2 sm:gap-3">
            <IoCalendarOutline className="text-[#FEC53D]" size={22} />

            <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-semibold text-black leading-tight">
              CTO & DM Tactical Planner
            </h3>
          </div>

          {/* Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto bg-[#0061FE] hover:bg-blue-700 text-white text-[14px] sm:text-[16px] px-4 sm:px-6 py-2 sm:py-2.5 rounded-[14px] flex items-center justify-center gap-2 font-bold"
          >
            <Plus size={18} className="sm:size-[20px]" />
            Add Notification
          </button>
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {notifications.map((n) => {
            const styles = getPriorityStyles(n.priority);

            return (
              <div
                key={n.id}
                className={`${n.bgColor} ${n.borderColor} border-l-4 rounded-lg p-4 flex items-center justify-between shadow-sm`}
              >
                <div>
                  <h3 className="text-[#202224] text-[16px] font-medium mb-2">
                    {n.title}
                  </h3>
                  <p className="text-[#202224] text-[12px] font-medium">
                    {n.time}
                  </p>
                </div>

                <span
                  className={`${styles.badge} px-6 py-2 rounded-[8px] text-[16px] font-medium min-w-[120px] text-center`}
                >
                  {n.priority}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md rounded-xl p-6 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <X />
            </button>

            <h3 className="text-xl font-bold mb-4">Add Notification</h3>

            {/* Title */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Notification Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter title..."
                className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Priority */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">Priority</label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            <button
              onClick={handleAddNotification}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium"
            >
              Add Notification
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notify;
