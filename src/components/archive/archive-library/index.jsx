import { useState } from "react";
import { createPortal } from "react-dom";
import { MoreVertical, Edit2, Info, Trash2, X, Check } from "lucide-react";

const tasks = [
  {
    id: 1,
    title: "M Tech Department",
    date: "July 30, 2025",
    avatars: 3,
  },
  {
    id: 2,
    title: "M Tech Department",
    date: "July 30, 2025",
    avatars: 3,
  },
  {
    id: 3,
    title: "M Tech Department",
    date: "July 30, 2025",
    avatars: 3,
  },
  {
    id: 4,
    title: "M Tech Department",
    date: "July 30, 2025",
    avatars: 3,
  },
  {
    id: 5,
    title: "M Tech Department",
    date: "July 30, 2025",
    avatars: 3,
  },
  {
    id: 6,
    title: "M Tech Department",
    date: "July 30, 2025",
    avatars: 3,
  },
  {
    id: 7,
    title: "M Tech Department",
    date: "July 30, 2025",
    avatars: 3,
  },
];

const DropdownMenu = ({
  task,
  position,
  onClose,
  onEdit,
  onInfo,
  onDelete,
}) => {
  return createPortal(
    <div className="fixed inset-0 z-40" onClick={onClose}>
      <div
        className="absolute bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50 min-w-[160px]"
        style={{ top: position.top, left: position.left }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => {
            onEdit(task);
            onClose();
          }}
          className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2 transition-colors"
        >
          <Edit2 className="w-4 h-4" /> Edit Name
        </button>
        <button
          onClick={() => {
            onInfo(task);
            onClose();
          }}
          className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-blue-50 flex items-center gap-2 transition-colors"
        >
          <Info className="w-4 h-4" /> Info
        </button>
        <button
          onClick={() => {
            onDelete(task);
            onClose();
          }}
          className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2 transition-colors"
        >
          <Trash2 className="w-4 h-4" /> Delete
        </button>
      </div>
    </div>,
    document.body
  );
};

const EditModal = ({ task, onClose, onSave }) => {
  const [newTitle, setNewTitle] = useState(task.title);

  return createPortal(
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4 flex items-center justify-between">
          <h3 className="text-white text-lg font-semibold flex items-center gap-2">
            <Edit2 className="w-5 h-5" />
            Edit Library Item
          </h3>
          <button onClick={onClose} className="text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Item Name
          </label>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            placeholder="Enter item name..."
            autoFocus
          />

          <div className="flex gap-3 mt-6">
            <button
              onClick={() => {
                if (newTitle.trim()) {
                  onSave(newTitle.trim());
                  onClose();
                }
              }}
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Check className="w-5 h-5" />
              Save Changes
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 rounded-lg transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

const InfoModal = ({ task, onClose }) => {
  return createPortal(
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4 flex items-center justify-between">
          <h3 className="text-white text-lg font-semibold flex items-center gap-2">
            <Info className="w-5 h-5" />
            Library Item Information
          </h3>
          <button onClick={onClose} className="text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-xs text-gray-500 mb-1">Item Name</p>
            <p className="text-gray-900 font-semibold text-lg">{task.title}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-xs text-blue-600 mb-1">Created Date</p>
              <p className="text-blue-900 font-medium text-sm">{task.date}</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <p className="text-xs text-green-600 mb-1">Team Members</p>
              <p className="text-green-900 font-bold text-2xl">
                {task.avatars}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 rounded-lg transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

const DeleteModal = ({ task, onClose, onConfirm }) => {
  return createPortal(
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        <div className="bg-gradient-to-r from-red-500 to-red-600 px-6 py-4 flex items-center justify-between">
          <h3 className="text-white text-lg font-semibold flex items-center gap-2">
            <Trash2 className="w-5 h-5" />
            Delete Library Item
          </h3>
          <button onClick={onClose} className="text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-gray-700 text-center">
              Are you sure you want to delete
              <span className="font-bold text-red-600"> "{task.title}"</span>?
            </p>
            <p className="text-gray-500 text-sm text-center mt-2">
              This action cannot be undone.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => {
                onConfirm();
                onClose();
              }}
              className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Trash2 className="w-5 h-5" />
              Delete
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 rounded-lg transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

const ArchiveLibrary = () => {
  const [openMenuTask, setOpenMenuTask] = useState(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const [taskList, setTaskList] = useState(tasks);
  const [editingTask, setEditingTask] = useState(null);
  const [infoTask, setInfoTask] = useState(null);
  const [deletingTask, setDeletingTask] = useState(null);

  const handleMenuToggle = (task, e) => {
    e.stopPropagation();
    if (openMenuTask && openMenuTask.id === task.id) {
      setOpenMenuTask(null);
    } else {
      const rect = e.currentTarget.getBoundingClientRect();
      const menuWidth = 160;
      let left = rect.right - menuWidth;

      if (left < 10) left = 10;
      if (left + menuWidth > window.innerWidth - 10) {
        left = window.innerWidth - menuWidth - 10;
      }

      setMenuPosition({
        top: rect.bottom + window.scrollY + 5,
        left: left,
      });
      setOpenMenuTask(task);
    }
  };

  const handleEdit = (task) => {
    setEditingTask(task);
  };

  const handleSaveEdit = (newTitle) => {
    setTaskList(
      taskList.map((t) =>
        t.id === editingTask.id ? { ...t, title: newTitle } : t
      )
    );
  };

  const handleInfo = (task) => {
    setInfoTask(task);
  };

  const handleDelete = (task) => {
    setDeletingTask(task);
  };

  const handleConfirmDelete = () => {
    setTaskList(taskList.filter((t) => t.id !== deletingTask.id));
  };

  return (
    <div className="my-3">
      <div>
        <h3 className="text-[#1F2937] text-[26px] sm:text-[32px] font-semibold mb-4 sm:mb-6">
          M library
        </h3>

        <div className="bg-white shadow-md p-6 rounded-[16px]">
          <p className="text-[#7D8592] font-bold text-[14px] mb-6">Category</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
            {taskList.map((task) => (
              <div
                key={task.id}
                className="bg-white rounded-[14px] border border-[#D8E0F0] overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-3.5">
                  <div className=" flex items-center justify-between">
                    <h3 className="text-[#1F2937] font-semibold text-[16px">
                      {task.title}
                    </h3>
                    <button
                      onClick={(e) => handleMenuToggle(task, e)}
                      className="bg-white "
                    >
                      <MoreVertical className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>

                  <div className="w-full h-[110px] border mt-2 border-[#E3EDFA] flex items-center justify-center">
                    <svg
                      className="w-30 h-30 text-black"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                <div className="p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-orange-400 flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <span className="text-[10px] text-[#7D8592] font-semibold">
                      {task.date}
                    </span>

                    <div className="flex -space-x-1">
                      {[...Array(task.avatars)].map((_, i) => (
                        <div
                          key={i}
                          className="w-6 h-6 rounded-full bg-green-500 border-2 border-white flex items-center justify-center"
                        >
                          <svg
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                          </svg>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {openMenuTask && (
        <DropdownMenu
          task={openMenuTask}
          position={menuPosition}
          onClose={() => setOpenMenuTask(null)}
          onEdit={handleEdit}
          onInfo={handleInfo}
          onDelete={handleDelete}
        />
      )}

      {editingTask && (
        <EditModal
          task={editingTask}
          onClose={() => setEditingTask(null)}
          onSave={handleSaveEdit}
        />
      )}

      {infoTask && (
        <InfoModal task={infoTask} onClose={() => setInfoTask(null)} />
      )}

      {deletingTask && (
        <DeleteModal
          task={deletingTask}
          onClose={() => setDeletingTask(null)}
          onConfirm={handleConfirmDelete}
        />
      )}
    </div>
  );
};

export default ArchiveLibrary;
