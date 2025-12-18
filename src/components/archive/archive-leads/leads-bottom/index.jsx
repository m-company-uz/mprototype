import { useState } from "react";
import { Plus, X } from "lucide-react";

const LeadsBottom = ({ onAdd }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && title.trim()) {
      onAdd(title);
      setTitle("");
      setOpen(false);
    }
  };

  return (
    <div className="w-full bg-[#F7F7F7] border border-[#EFEFEF] rounded-[8px] px-4 py-6">
      {!open ? (
        <h3
          onClick={() => setOpen(true)}
          className="bg-[#9CA4B1] rounded-[8px] flex items-center gap-2 text-white py-1.5 px-2.5 max-w-[170px] cursor-pointer"
        >
          <Plus size={20} />
          Add new group
        </h3>
      ) : (
        <div className="flex items-center gap-2 max-w-[320px]">
          <input
            autoFocus
            type="text"
            placeholder="Group title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full px-3 py-2 rounded-[8px] border border-[#EFEFEF] text-[14px] outline-none"
          />

          <X
            onClick={() => setOpen(false)}
            className="cursor-pointer text-[#6B7280]"
          />
        </div>
      )}
    </div>
  );
};

export default LeadsBottom;
