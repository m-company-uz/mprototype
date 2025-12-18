import { useState, useEffect } from "react";
import { User, ChevronDown, Filter, Truck, X } from "lucide-react";
import { CiExport } from "react-icons/ci";

const owners = ["Yunusxo'ja Rixsiboyev", "Malika", "Other"];
const statuses = ["follow-up", "minus"];
const sources = ["Outreach", "Referral", "Other"];

const LeadsNavbar = () => {
  const [active, setActive] = useState(null); // "new", "person", "filter", "import"

  // Filter states
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Statuses");
  const [owner, setOwner] = useState("All Owners");
  const [source, setSource] = useState("All Sources");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  // ESC tugmasi bilan yopish
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const btnClass = (name) =>
    `flex items-center justify-center gap-2 rounded-[8px] border p-2 text-[14px] sm:text-[16px] font-medium cursor-pointer transition
    ${
      active === name
        ? "bg-[#0061FE] text-white border-[#0061FE]"
        : "bg-white text-[#313131] border-[#EFEFEF]"
    }`;

  const applyFilter = () => {
    console.log({ search, status, owner, source, fromDate, toDate });
    alert("Filters applied!");
    setActive(null); // apply qilganda yopilsin
  };

  const clearFilter = () => {
    setSearch("");
    setStatus("All Statuses");
    setOwner("All Owners");
    setSource("All Sources");
    setFromDate("");
    setToDate("");
  };

  return (
    <div>
      {/* Custom animation styles */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.2s ease-out;
        }
      `}</style>

      {/* Navbar buttons */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4">
        <div className="relative">
          <p onClick={() => setActive("new")} className={btnClass("new")}>
            New item <ChevronDown size={18} />
          </p>
        </div>

        <div className="relative">
          <p onClick={() => setActive("person")} className={btnClass("person")}>
            Person <User size={18} />
          </p>

          {/* Person modal */}
          {active === "person" && (
            <div className="absolute top-full mt-2 z-50 bg-white border border-gray-200 rounded-xl shadow-2xl p-5 w-80 max-h-[70vh] overflow-y-auto animate-slideDown">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Select Person
                </h3>
                <button
                  onClick={() => setActive(null)}
                  className="text-gray-400 hover:text-gray-600 transition"
                >
                  <X size={20} />
                </button>
              </div>
              <ul className="space-y-2">
                {owners.map((o) => (
                  <li
                    key={o}
                    className="p-3 border border-gray-100 rounded-lg cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition-all duration-200"
                  >
                    <div className="flex items-center gap-2">
                      <User size={16} className="text-gray-500" />
                      <span className="text-gray-700">{o}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="relative">
          <p onClick={() => setActive("filter")} className={btnClass("filter")}>
            Filter <Filter size={18} />
          </p>

          {/* Filter modal */}
          {active === "filter" && (
            <div className="fixed top-1/2 left-1/2 z-50 bg-white border border-gray-200 rounded-xl shadow-2xl p-6 w-150 max-h-[90vh] overflow-y-auto hide-scrollbar animate-slideDown transform -translate-x-1/2 -translate-y-1/2">
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-xl font-semibold text-gray-800">
                  Filter Leads
                </h3>
                <button
                  onClick={() => setActive(null)}
                  className="text-gray-400 hover:text-gray-600 transition"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-2 mb-4">
                <label className="text-sm font-medium text-gray-700">
                  Search
                </label>
                <input
                  type="text"
                  placeholder="Search by name, phone, or notes..."
                  className="border border-gray-200 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-2 mb-4">
                <label className="text-sm font-medium text-gray-700">
                  Status
                </label>
                <select
                  className="border border-gray-200 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option>All Statuses</option>
                  {statuses.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2 mb-4">
                <label className="text-sm font-medium text-gray-700">
                  Owner
                </label>
                <select
                  className="border border-gray-200 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
                  value={owner}
                  onChange={(e) => setOwner(e.target.value)}
                >
                  <option>All Owners</option>
                  {owners.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2 mb-4">
                <label className="text-sm font-medium text-gray-700">
                  Source
                </label>
                <select
                  className="border border-gray-200 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                >
                  <option>All Sources</option>
                  {sources.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="flex gap-3 mb-6">
                <div className="flex-1">
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    From
                  </label>
                  <input
                    type="date"
                    className="border border-gray-200 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                  />
                </div>
                <div className="flex-1">
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    To
                  </label>
                  <input
                    type="date"
                    className="border border-gray-200 rounded-lg p-3 w-full focus:outline-none focus:ring-2 ring-blue-500 focus:border-transparent transition"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex justify-between gap-3 pt-4 border-t border-gray-100">
                <button
                  onClick={clearFilter}
                  className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition font-medium"
                >
                  Clear All
                </button>
                <button
                  onClick={applyFilter}
                  className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium shadow-lg shadow-blue-500/30"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="relative">
          <p onClick={() => setActive("import")} className={btnClass("import")}>
            Import <Truck size={18} />
          </p>
        </div>

        <div className="relative">
          <p onClick={() => setActive("export")} className={btnClass("export")}>
            Export <CiExport size={18} />
          </p>
        </div>
      </div>

      {/* Modal backdrop */}
      {(active === "person" || active === "filter") && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 bg-black/30 z-40"
        ></div>
      )}
    </div>
  );
};

export default LeadsNavbar;
