import { Plus } from "lucide-react";
import DepartmentNavbar from "../department-modal/navbar";
import { FaLinkedin, FaTelegram, FaUsers } from "react-icons/fa";
import iskandar from "../../../assets/iskandar.jpg";
import { Instagram } from "lucide-react";

const teamMembers = [
  { name: "Sevinch Sharobidinova", role: "Web Designer" },
  { name: "Nurmamatov Murodil", role: "Frontend" },
  { name: "Muslimbek Bo'stonov", role: "Frontend" },
  { name: "Shahrizoda Xakimova", role: "CFO" },
  { name: "Foziljon Ruzmamatov", role: "Falco CEO" },
  // Agar kelganlar ko'p bo'lsa shu yerga qo'shib borish mumkin
];

const Card = ({ name, role }) => (
  <div className="w-full max-w-[320px] min-w-[250px] xs:min-w-[280px] h-[450px] flex-shrink-0 flex flex-col justify-center items-center shadow-md rounded-[14px] xs:rounded-[18px] bg-white text-center hover:shadow-lg transition-all duration-300 mx-auto">
    <img
      src={iskandar}
      alt={name}
      className="w-full h-[300px] rounded-[14px] xs:rounded-[18px]"
    />
    <div className="py-3 xs:py-4 sm:py-5 px-3 w-full">
      <h3 className="text-[#000815] h-[40px] text-[13px] xs:text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-bold leading-tight px-1">
        {name}
      </h3>
      <p className="text-[#000815] text-[13px] xs:text-[14px] sm:text-[15px] md:text-[16px] font-medium my-1 xs:my-2 sm:my-3">
        {role}
      </p>
      <div className="flex items-center justify-center gap-2 xs:gap-3 sm:gap-4">
        <a
          className="bg-[#0061FE] text-white rounded-full p-1.5 xs:p-2 hover:bg-blue-600 transition-colors"
          href="#"
        >
          <Instagram size={14} xs:size={16} sm:size={18} />
        </a>
        <a
          className="bg-[#0061FE] text-white rounded-full p-1.5 xs:p-2 hover:bg-blue-600 transition-colors"
          href="#"
        >
          <FaLinkedin size={14} xs:size={16} sm:size={18} />
        </a>
        <a
          className="bg-[#0061FE] text-white rounded-full p-1.5 xs:p-2 hover:bg-blue-600 transition-colors"
          href="#"
        >
          <FaTelegram size={14} xs:size={16} sm:size={18} />
        </a>
      </div>
    </div>
  </div>
);

const Team = () => {
  return (
    <div>
      <DepartmentNavbar />

      <div className="container mx-auto py-3 xs:py-4 sm:py-6">
        {/* Main container */}
        <div className="bg-white p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8 rounded-[6px] xs:rounded-[8px] shadow-md">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-8 lg:mb-10 gap-4">
            <h3 className="flex items-center gap-3 text-black text-[20px] sm:text-[22px] lg:text-[24px] font-semibold">
              <FaUsers className="text-[#36C27C] text-2xl sm:text-3xl" />
              <span>Team Structure</span>
            </h3>
            <button className="flex max-w-[200px] items-center gap-2 bg-[#0061FE] text-white font-semibold text-[14px] sm:text-[15px] px-4 sm:px-5 py-2.5 sm:py-3 rounded-[12px] hover:bg-blue-600 transition-colors w-full sm:w-auto justify-center">
              <Plus size={18} />
              <span>Choose Teamlead</span>
            </button>
          </div>

          {/* Founder - center */}
          <div className="flex justify-center mb-6 xs:mb-8 sm:mb-10">
            <Card name="Hamrayev Iskandar Alisher o'g'li" role="Founder" />
          </div>

          {/* General Manager - center */}
          <div className="flex justify-center mb-6 xs:mb-8 sm:mb-10">
            <Card
              name="Narkuziyev Nodirbek Kadirovich"
              role="General Manager"
            />
          </div>

          {/* 3 main cards in a row - responsive */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 w-full max-w-4xl mx-auto">
              <div className="flex justify-center xs:justify-start lg:justify-center">
                <Card
                  name="Allayoruv Boburjon"
                  role="Chief Technology Officer"
                />
              </div>
              <div className="flex justify-center">
                <Card name="Zokhidjon Qodirov" role="Backend" />
              </div>
              <div className="flex justify-center xs:justify-end lg:justify-center xs:col-span-2 lg:col-span-1">
                <Card name="Xasanova Go'zal O'ktamovna" role="Web Designer" />
              </div>
            </div>
          </div>
        </div>

        {/* Remaining team members section */}
        <div className="mt-4 xs:mt-5 sm:mt-6 md:mt-8">
          <div className="bg-white p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8 rounded-[6px] xs:rounded-[8px] shadow-md">
            {/* Scrollable container */}
            <div className="relative w-full overflow-hidden">
              <div className="flex overflow-x-auto gap-4 px-4 pb-4 snap-x snap-mandatory hide-scrollbar">
                {teamMembers.map((member, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 w-[85vw] max-w-[280px] snap-start"
                  >
                    <Card name={member.name} role={member.role} />
                  </div>
                ))}
              </div>

              {/* Scroll hint */}
              <div className="sm:hidden text-center mt-1">
                <p className="text-xs text-gray-500">← Swipe for more →</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
