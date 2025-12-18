import { Copy, Upload, Move, Trash2, X } from "lucide-react";
import { IoArchive } from "react-icons/io5";

const ArchiveCheckbox = ({ selectedCount, onClear }) => {
  return (
    <div className="bg-white border border-gray-200 shadow-2xl p-4 flex flex-wrap items-center justify-center rounded-lg gap-4 w-full md:w-auto">
      {/* Tanlanganlar soni */}
      <div className="flex items-center gap-2 sm:gap-4 text-black rounded-full px-2 sm:px-3 py-1 font-semibold">
        <span className="bg-[#0061FE] p-2 text-[14px] sm:text-[16px] text-white rounded-full">
          {selectedCount}1
        </span>
        Selected leads
      </div>

      {/* Copy tugmasi */}
      <button
        className="flex flex-col items-center gap-1 min-w-[60px] sm:min-w-[80px] hover:bg-gray-50 p-2 rounded-md transition-colors"
        title="Copy selected items"
      >
        <Copy size={16} />
        <span className="text-xs sm:text-sm">Copy</span>
      </button>

      {/* Export tugmasi */}
      <button
        className="flex flex-col items-center gap-1 min-w-[60px] sm:min-w-[80px] hover:bg-gray-50 p-2 rounded-md transition-colors"
        title="Export selected items"
      >
        <Upload size={16} />
        <span className="text-xs sm:text-sm">Export</span>
      </button>

      {/* Move To tugmasi */}
      <button
        className="flex flex-col items-center gap-1 min-w-[60px] sm:min-w-[80px] hover:bg-gray-50 p-2 rounded-md transition-colors"
        title="Move selected items to another group"
      >
        <Move size={16} />
        <span className="text-xs sm:text-sm">Move To</span>
      </button>

      {/* Archive tugmasi */}
      <button
        className="flex flex-col items-center gap-1 min-w-[60px] sm:min-w-[80px] hover:bg-gray-50 p-2 rounded-md transition-colors"
        title="Archive selected items"
      >
        <IoArchive size={16} />
        <span className="text-xs sm:text-sm">Archive</span>
      </button>

      {/* Delete tugmasi */}
      <button
        className="flex flex-col items-center gap-1 min-w-[60px] sm:min-w-[80px] hover:bg-red-50 text-red-600 p-2 rounded-md transition-colors"
        title="Delete selected items"
      >
        <Trash2 size={16} />
        <span className="text-xs sm:text-sm">Delete</span>
      </button>

      <button
        onClick={onClear} // X bosilganda ishlaydi
        className="text-gray-500 hover:text-gray-700 hover:bg-gray-50 p-2 rounded-md transition-colors"
        title="Clear selection"
      >
        <X size={20} />
      </button>
    </div>
  );
};

export default ArchiveCheckbox;
