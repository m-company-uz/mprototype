import { useState } from "react";
import { createPortal } from "react-dom";
import { MoreVertical, Edit2, Info, Trash2, X, Check } from "lucide-react";

const tasks = [
  {
    id: 1,
    title: "Design Homepage",
    progress: 45,
    startDate: "Dec 21",
    endDate: "Sep 18",
    avatars: 3,
  },
  {
    id: 2,
    title: "Develop API",
    progress: 70,
    startDate: "Dec 21",
    endDate: "Sep 18",
    avatars: 2,
  },
  {
    id: 3,
    title: "Write Documentation",
    progress: 30,
    startDate: "Dec 21",
    endDate: "Sep 18",
    avatars: 1,
  },
  {
    id: 4,
    title: "Design System",
    progress: 55,
    startDate: "Dec 21",
    endDate: "Sep 18",
    avatars: 3,
  },
  {
    id: 5,
    title: "Testing Phase",
    progress: 80,
    startDate: "Dec 21",
    endDate: "Sep 18",
    avatars: 2,
  },
  {
    id: 6,
    title: "Deployment",
    progress: 60,
    startDate: "Dec 21",
    endDate: "Sep 18",
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
        className="absolute bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50"
        style={{ top: position.top, left: position.left }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => {
            onEdit(task);
            onClose();
          }}
          className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
        >
          <Edit2 className="w-4 h-4" /> Edit Name
        </button>
        <button
          onClick={() => {
            onInfo(task);
            onClose();
          }}
          className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-blue-50 flex items-center gap-2"
        >
          <Info className="w-4 h-4" /> Info
        </button>
        <button
          onClick={() => {
            onDelete(task);
            onClose();
          }}
          className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
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
            Edit Task
          </h3>
          <button onClick={onClose} className="text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Task Name
          </label>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            placeholder="Enter task name..."
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
            Task Information
          </h3>
          <button onClick={onClose} className="text-white ">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-xs text-gray-500 mb-1">Task Name</p>
            <p className="text-gray-900 font-semibold text-lg">{task.title}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-xs text-blue-600 mb-1">Progress</p>
              <p className="text-blue-900 font-bold text-2xl">
                {task.progress}%
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <p className="text-xs text-green-600 mb-1">Team Size</p>
              <p className="text-green-900 font-bold text-2xl">
                {task.avatars}
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-xs text-gray-500 mb-2">Timeline</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500">Start Date</p>
                <p className="text-gray-900 font-medium">{task.startDate}</p>
              </div>
              <div className="text-gray-400">→</div>
              <div>
                <p className="text-xs text-gray-500">End Date</p>
                <p className="text-gray-900 font-medium">{task.endDate}</p>
              </div>
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
            Delete Task
          </h3>
          <button onClick={onClose} className="text-white ">
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

const ArchiveTasks = () => {
  const [openMenuTask, setOpenMenuTask] = useState(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const [taskList, setTaskList] = useState(tasks);
  const [editingTask, setEditingTask] = useState(null);
  const [infoTask, setInfoTask] = useState(null);
  const [deletingTask, setDeletingTask] = useState(null);

  const handleMenuToggle = (task, e) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const menuWidth = 110; // dropdown width
    const menuHeight = 120; // approx dropdown height

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let top = rect.bottom + window.scrollY;
    let left = rect.right - menuWidth;

    // Agar pastga joy yetmasa, tepaga ochilsin
    if (rect.bottom + menuHeight > viewportHeight) {
      top = rect.top - menuHeight + window.scrollY;
    }

    // Agar o‘ngga joy yetmasa, chapga silkinsin
    if (rect.right > viewportWidth - menuWidth) {
      left = rect.left + window.scrollX;
    }

    if (openMenuTask && openMenuTask.id === task.id) {
      setOpenMenuTask(null);
    } else {
      setMenuPosition({ top, left });
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
    <div>
      <h3 className="text-[#1F2937] text-[26px] sm:text-[32px] font-semibold mb-4 sm:mb-6">
        Tasks
      </h3>

      <div className="bg-white shadow-md p-6 rounded-[16px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {taskList.map((task) => (
            <div
              key={task.id}
              className="bg-white w-full max-w-[300px] rounded-[8px] p-3 shadow-sm overflow-visible hover:shadow-md transition-shadow relative"
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/015/132/103/large_2x/light-cyan-background-images-hd-pictures-and-wallpaper-for-free-download-free-photo.jpg"
                alt={task.title}
                className="w-full h-[140px] rounded-[8px] mb-4 object-cover"
              />

              <div className="mb-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[16px] font-medium text-black">
                    {task.progress}%
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${task.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <div className="flex -space-x-2">
                    {[...Array(task.avatars)].map((_, i) => (
                      <div
                        key={i}
                        className="w-[24px] h-[24px] rounded-full bg-green-500 border-2 border-white flex items-center justify-center"
                      ></div>
                    ))}
                  </div>
                  <h3 className="text-black font-medium text-sm sm:text-[20px] truncate flex-1">
                    {task.title}
                  </h3>
                </div>

                <button
                  onClick={(e) => handleMenuToggle(task, e)}
                  className="p-1 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
                >
                  <MoreVertical className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500">
                <span>{task.startDate}</span>
                <span>{task.endDate}</span>
              </div>
            </div>
          ))}
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

export default ArchiveTasks;
