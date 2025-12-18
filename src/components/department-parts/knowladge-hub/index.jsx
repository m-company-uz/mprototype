import { FaBookOpen } from "react-icons/fa";
import DepartmentNavbar from "../department-modal/navbar";
import logo1 from "../../../assets/knowladge/logo1.svg";
import logo2 from "../../../assets/knowladge/logo2.svg";
import logo3 from "../../../assets/knowladge/logo3.svg";
import logo4 from "../../../assets/knowladge/logo4.svg";

const KnowledgeHub = () => {
  const categories = [
    {
      icon: logo1,
      title: "Backend",
      description: "Designers use these tools to create UI/UX",
      items: [
        "Designers use these tools to create UI/UX",
        "Designers use these tools to create UI/UX",
      ],
      tags: ["Node.js", "Python", "Java", "C#"],
    },
    {
      icon: logo4,
      title: "UI/UX design",
      description: "Designers use these tools to create UI/UX",
      items: [
        "Designers use these tools to create UI/UX",
        "Designers use these tools to create UI/UX",
      ],
      tags: ["Figma", "Photoshop", "Sipline", "Canva"],
    },
    {
      icon: logo3,
      title: "Frontend",
      description: "Designers use these tools to create UI/UX",
      items: [
        "Designers use these tools to create UI/UX",
        "Designers use these tools to create UI/UX",
      ],
      tags: ["HTML5", "JavaScript", "TypeScript", "Canva"],
    },
    {
      icon: logo2,
      title: "Other resourse",
      description: "Designers use these tools to create UI/UX",
      items: [
        "Designers use these tools to create UI/UX",
        "Designers use these tools to create UI/UX",
      ],
      tags: ["Figma", "Photoshop", "Sipline", "Canva"],
    },
  ];

  return (
    <div>
      {/* DepartmentNavbar */}
      <DepartmentNavbar />

      {/* Main Content */}
      <div className="bg-white shadow-md px-4 md:px-6 py-6 sm:py-8 my-5 rounded-[14px]">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <FaBookOpen size={26} className="text-[#FEC53D]" />

          <h3 className="text-xl sm:text-[24px] font-semibold text-black">
            Knowledge Hub
          </h3>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-[#F9F9F9] rounded-xl border-2 border-[#3476e1] p-4 sm:p-6 hover:shadow-lg transition-shadow"
            >
              {/* Icon and Title */}
              <img
                src={category.icon}
                alt={category.title}
                loading="loader"
                className="w-10 h-10 sm:w-12 sm:h-12  rounded-full flex items-center justify-center"
              />

              <h3 className="text-base sm:text-[16px] my-3 font-semibold text-[#0061FE]">
                {category.title}
              </h3>

              {/* Description */}
              <p className="text-[16px] text-black font-semibold mb-4">
                {category.description}
              </p>

              {/* Checklist */}
              <div className="space-y-2 mb-4">
                {category.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-black flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[16px] text-black font-semibold">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {category.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-6 py-1.5 text-[16px] font-semibold bg-[#0061FE] text-white text-xs sm:text-sm rounded-full hover:bg-blue-600 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KnowledgeHub;
