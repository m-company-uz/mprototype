import { Link } from "react-router-dom";
import { FileText, Users, BookOpen, BarChart3 } from "lucide-react";
import archive1 from "../../assets/archive/archive1.png";
import archive2 from "../../assets/archive/archive2.png";
import archive3 from "../../assets/archive/archive3.png";
import archive4 from "../../assets/archive/archive4.png";

const Archive = () => {
  const archives = [
    {
      id: 1,
      title: "Tasks Archive",
      description: "A Student Union is an official student organization in a",
      image: archive1,
      link: "/archive/tasks",
    },
    {
      id: 2,
      title: "Leads Archive",
      description: "A Student Union is an official student organization in a",
      image: archive4,
      link: "/archive/leads",
    },
    {
      id: 3,
      title: "M-Library Archive",
      description: "A Student Union is an official student organization in a",
      image: archive3,
      link: "/archive/m-library",
    },
    {
      id: 4,
      title: "Reports Archive",
      description: "A Student Union is an official student organization in a",
      image: archive2,
      link: "/archive/reports",
    },
  ];

  return (
    <div className="w-full my-4">
      <h3 className="text-[24px] md:text-[32px] font-semibold text-[#0A1629] mb-4">
        Archive
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {archives.map((archive) => (
          <Link
            key={archive.id}
            to={archive.link}
            className="bg-white shadow-md p-4 border border-[#E5E5E5] rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <img
              src={archive.image}
              alt={archive.title}
              className="w-full h-[176px]"
            />

            <div className="py-4">
              <h3 className="text-[16px] font-semibold text-black mb-2">
                {archive.title}
              </h3>

              <p className="text-[16px] text-black line-clamp-2">
                {archive.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Archive;
