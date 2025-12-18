import { useState, useRef, useEffect } from "react";
import {
  ChevronRight,
  EllipsisVertical,
  SquarePen,
  Trash2,
} from "lucide-react";
import ArchiveTable from "./archive-table";

const LeadsMain = ({ data, openId, onToggle, onEdit, onDelete }) => {
  const [menuOpenId, setMenuOpenId] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");
  const menuRef = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpenId(null);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const handleEditSubmit = (id) => {
    if (editValue.trim()) {
      onEdit(id, editValue.trim());
      setEditingId(null);
      setEditValue("");
    }
  };

  return (
    <div className="flex flex-col gap-3">
      {data.map((item) => (
        <div
          key={item.id}
          className="w-full bg-[#F7F7F7] border border-[#EFEFEF] rounded-[8px] p-4"
        >
          {/* HEADER */}
          <div className="flex items-start justify-between">
            <div
              className="flex items-start gap-3 cursor-pointer"
              onClick={() => onToggle(item.id)}
            >
              <ChevronRight
                className={`text-[#1F2937] transition-transform duration-300 ${
                  openId === item.id ? "rotate-90" : ""
                }`}
              />

              <div className="flex flex-col gap-2">
                {editingId === item.id ? (
                  <input
                    autoFocus
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onBlur={() => handleEditSubmit(item.id)}
                    onKeyDown={(e) =>
                      e.key === "Enter" && handleEditSubmit(item.id)
                    }
                    className="px-2 py-1 rounded border border-gray-300 outline-none text-[18px] font-medium"
                  />
                ) : (
                  <h3 className="text-[#1F2937] font-medium text-[18px]">
                    {item.title}
                  </h3>
                )}
                <p className="text-[#1F2937] text-[14px]">
                  <span>{item.leads}</span> leads
                </p>
              </div>
            </div>

            {/* 3 DOTS */}
            <div ref={menuRef} className="relative">
              <EllipsisVertical
                onClick={() =>
                  setMenuOpenId(menuOpenId === item.id ? null : item.id)
                }
                className="text-[#1F2937] text-[18px] cursor-pointer"
              />

              {menuOpenId === item.id && (
                <div className="absolute right-0 mt-2 w-36 bg-white border border-[#EFEFEF] rounded-[8px] shadow-md z-50">
                  <p
                    onClick={() => {
                      setEditingId(item.id);
                      setEditValue(item.title);
                      setMenuOpenId(null);
                    }}
                    className="px-4 flex items-center gap-2 py-2 font-medium text-[#1F2937] text-[14px] hover:bg-gray-100 cursor-pointer"
                  >
                    <SquarePen size={15} /> Edit title
                  </p>
                  <p
                    onClick={() => {
                      onDelete(item.id);
                      setMenuOpenId(null);
                    }}
                    className="px-4 flex items-center gap-2 py-2 font-medium text-[14px] hover:bg-gray-100 cursor-pointer text-red-600"
                  >
                    <Trash2 size={15} /> Delete
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* CONTENT */}
          {openId === item.id && (
            <div className="mt-4">
              <ArchiveTable />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LeadsMain;
