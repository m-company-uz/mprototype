import { Trophy } from "lucide-react";
import DepartmentNavbar from "../department-modal/navbar";
import { PiMedalFill, PiSealCheckLight } from "react-icons/pi";
import { RefreshCcw } from "lucide-react";
import { Trash } from "lucide-react";

const Recognition = () => {
  const recognitionCards = [
    {
      title: "Department-level features",
      name: "Karimova Gd Gul",
      role: "UX designer",
      reason: "Ux dizayn darajasi [C++,C#, Java/code]",
    },
    {
      title: "Solved critical bugs",
      name: "Karimova Gd Gul",
      role: "UX designer",
      reason: "Ux dizayn darajasi [C++,C#, Java/code]",
    },
    {
      title: "Respect teammates",
      name: "Karimova Gd Gul",
      role: "UX designer",
      reason: "Ux dizayn darajasi [C++,C#, Java/code]",
    },
    {
      title: "Represent code-quality",
      name: "Karimova Gd Gul",
      role: "UX designer",
      reason: "Ux dizayn darajasi [C++,C#, Java/code]",
    },
  ];

  const projectCards = [
    {
      title: "NALEO",
      type: "Techno",
      day: "29 Aug 2025",
      description:
        "In labore labore non officia incididunt ullamco mollit ut ipsum adipisicing cupidatat aliquip magna.",
      stats: [
        {
          label: "Return for Fixes",
          value: "25",
          icon: <RefreshCcw className="text-[#07E098]" />,
          bgColor: "bg-[#E9F2FF]", // #E9F2FF - Return for Fixes uchun
        },
        {
          label: "Dropped",
          value: "10",
          icon: <Trash className="text-[#0061FE]" />,
          bgColor: "bg-[#F0F7FF]", // #F0F7FF - Dropped uchun
        },
        {
          label: "Approved",
          value: "12",
          icon: <PiMedalFill className="text-[#FEC53D]" />,
          bgColor: "bg-[#E9F2FF]", // #E9F2FF - Approved uchun
        },
      ],
    },
    {
      title: "Student driver",
      type: "Talaba haydovchi",
      day: "29 Aug 2025",
      description:
        "In labore labore non officia incididunt ullamco mollit ut ipsum adipisicing cupidatat aliquip magna.",
      stats: [
        {
          label: "Return for Fixes",
          value: "25",
          icon: <RefreshCcw className="text-[#07E098]" />,
          bgColor: "bg-[#E9F2FF]",
        },
        {
          label: "Dropped",
          value: "10",
          icon: <Trash className="text-[#0061FE]" />,
          bgColor: "bg-[#F0F7FF]",
        },
        {
          label: "Approved",
          value: "13",
          icon: <PiMedalFill className="text-[#FEC53D]" />,
          bgColor: "bg-[#E9F2FF]",
        },
      ],
    },
    {
      title: "PALEO",
      type: "Techno",
      day: "29 Aug 2025",
      description:
        "In labore labore non officia incididunt ullamco mollit ut ipsum adipisicing cupidatat aliquip magna.",
      stats: [
        {
          label: "Return for Fixes",
          value: "25",
          icon: <RefreshCcw className="text-[#07E098]" />,
          bgColor: "bg-[#E9F2FF]",
        },
        {
          label: "Dropped",
          value: "10",
          icon: <Trash className="text-[#0061FE]" />,
          bgColor: "bg-[#F0F7FF]",
        },
        {
          label: "Approved",
          value: "13",
          icon: <PiMedalFill className="text-[#FEC53D]" />,
          bgColor: "bg-[#E9F2FF]",
        },
      ],
    },
    {
      title: "Student driver",
      type: "Talaba haydovchi",
      day: "29 Aug 2025",
      description:
        "In labore labore non officia incididunt ullamco mollit ut ipsum adipisicing cupidatat aliquip magna.",
      stats: [
        {
          label: "Return for Fixes",
          value: "25",
          icon: <RefreshCcw className="text-[#07E098]" />,
          bgColor: "bg-[#E9F2FF]",
        },
        {
          label: "Dropped",
          value: "10",
          icon: <Trash className="text-[#0061FE]" />,
          bgColor: "bg-[#F0F7FF]",
        },
        {
          label: "Approved",
          value: "13",
          icon: <PiMedalFill className="text-[#FEC53D]" />,
          bgColor: "bg-[#E9F2FF]",
        },
      ],
    },
  ];

  return (
    <div>
      {/* DepartmentNavbar */}
      <DepartmentNavbar />

      <div className="my-3 sm:my-4 md:my-5">
        {/* Recognition Wall Section */}
        <div className="mb-6 sm:mb-8 rounded-[14px] shadow-md bg-white px-3 sm:px-8 py-4 sm:py-6 md:py-8">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <PiMedalFill className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFB400]" />
            <h3 className="text-lg sm:text-xl md:text-[24px] font-semibold text-black">
              Recognition Wall
            </h3>
          </div>

          <div className="max-w-[956px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {recognitionCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-[8px] p-3 sm:p-4 md:p-5 border-2 border-[#0061FE]"
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-[24px] font-semibold text-[#2B2B2B] truncate">
                    {card.title}
                  </h3>
                  <div className="p-2 sm:p-3 md:p-4 flex items-center justify-center bg-[#EAF2FF] rounded-[16px] hover:bg-gray-200 transition-colors cursor-pointer">
                    <PiSealCheckLight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#0061FE]" />
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-10">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 bg-gray-300 rounded-full flex-shrink-0"></div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm md:text-base lg:text-[24px] font-semibold text-[#2B2B2B] truncate">
                      {card.name}
                    </p>
                    <p className="text-xs sm:text-sm md:text-base text-[#2B2B2B] font-medium truncate">
                      {card.role}
                    </p>
                  </div>
                </div>

                <p className="bg-[#E3EDFF] text-center w-full py-2 sm:py-3 md:py-4 rounded-[8px] text-xs sm:text-sm md:text-[14px] font-semibold text-[#202224]">
                  {card.reason}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Project Success Section */}
        <div className="rounded-[14px] shadow-md bg-white px-3 sm:px-8 py-4 sm:py-6 md:py-8">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-[#3BEE00]" />
            <h3 className="text-lg sm:text-xl md:text-[24px] font-semibold text-black">
              Project Success
            </h3>
          </div>

          <div className=" grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {projectCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Header with sequential colors */}
                <div className="flex items-center bg-[#B3D0FF] justify-center text-center rounded-t-[10px] w-full py-3 mb-2 ">
                  <h3 className="text-sm sm:text-base md:text-[20px] font-bold text-[#1F2937] px-2">
                    {card.title}
                  </h3>
                </div>

                <div className="bg-white p-3 sm:p-4">
                  <div className="w-full h-24 sm:h-28 md:h-32 lg:h-40 bg-gray-300 rounded-lg"></div>
                </div>

                <div className="p-3 sm:p-4">
                  <p className="text-xs sm:text-sm md:text-[16px] text-center text-black font-medium mb-3 sm:mb-4 line-clamp-2">
                    {card.description}
                  </p>

                  {/* Stats */}
                  <div className="flex justify-between sm:justify-around items-stretch gap-2">
                    {card.stats.map((stat, i) => (
                      <div
                        key={i}
                        className={`text-center max-w-[150px] w-full h-[130px] flex flex-col items-center justify-center gap-2 sm:gap-3 rounded-[8px] py-2 sm:py-2.5 px-2 sm:px-4 ${
                          i % 3 === 0
                            ? "bg-[#F8FFFD]"
                            : i % 3 === 1
                            ? "bg-[#E9F2FF]"
                            : "bg-[#FFFBF1]"
                        }`}
                      >
                        {/* Icon */}
                        <div className="text-lg sm:text-xl md:text-2xl">
                          {stat.icon}
                        </div>

                        {/* Label */}
                        <div className="text-[7px] xs:text-[12px] sm:text-[13px] md:text-[14px] font-semibold text-black text-center">
                          {stat.label}
                        </div>

                        {/* Value */}
                        <div
                          className={`text-xs sm:text-sm md:text-[14px] font-semibold ${
                            stat.color || "text-black"
                          }`}
                        >
                          {stat.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-3 sm:mt-4">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10 bg-black/20 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"></div>
                    <p className="text-xs md:text-[16px] text-[#202224] font-medium hover:underline">
                      {card.day}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recognition;
