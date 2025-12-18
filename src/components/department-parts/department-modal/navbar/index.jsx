import { MdDashboard } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { FaBookOpen, FaStar } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { useNavigate, useLocation } from "react-router-dom";

const DepartmentNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const buttons = [
    {
      name: "Dashboard",
      icon: <MdDashboard size={32} />,
      path: "/departments/dashboard",
    },
    {
      name: "Notifier",
      icon: <IoIosNotifications size={32} />,
      path: "/departments/notifier",
    },
    {
      name: "Team",
      icon: <RiTeamFill size={32} />,
      path: "/departments/team",
    },
    {
      name: "Recognition",
      icon: <FaStar size={32} />,
      path: "/departments/recognition",
    },
    {
      name: "Knowledge Hub",
      icon: <FaBookOpen size={32} />,
      path: "/departments/knowledge",
    },
  ];

  return (
      <div className="w-full flex gap-[24px] justify-start  items-center px-4 py-6 bg-white rounded-[16px] mt-[24px] overflow-x-auto flex-nowrap hide-scrollbar">
        {buttons.map((btn) => {
          const isActive = location.pathname === btn.path;

          return (
            <button
              key={btn.name}
              onClick={() => navigate(btn.path)}
              className={`flex shrink-0 gap-2 items-center justify-center text-centercmin-w-[160px] rounded-[8px] px-4 py-2 font-medium text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] transition-colors
              ${
                isActive
                  ? "bg-[#0061FE] border-[#0061FE] text-white"
                  : "bg-white border-2 border-[#D7D7D7] text-[#9A9A9A]"
              }`}
            >
              {btn.icon}
              <span className="whitespace-nowrap">{btn.name}</span>
            </button>
          );
        })}
      </div>
  );
};

export default DepartmentNavbar;
