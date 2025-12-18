import { useState } from "react";
import LeadsNavbar from "./leads-navbar";
import LeadsMain from "./leads-main";
import LeadsBottom from "./leads-bottom";

const initialData = [
  { id: 1, title: "Group Title 1", leads: 2 },
  { id: 2, title: "Group Title 2", leads: 5 },
  { id: 3, title: "Group Title 3", leads: 1 },
];

const ArchiveLeads = () => {
  const [activeTab, setActiveTab] = useState("new");
  const [groups, setGroups] = useState(initialData);
  const [openId, setOpenId] = useState(null);

  const toggleGroup = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const addNewGroup = (title) => {
    setGroups([...groups, { id: Date.now(), title, leads: 0 }]);
  };

  // ✅ DELETE
  const handleDelete = (id) => {
    setGroups((prev) => prev.filter((g) => g.id !== id));
    if (openId === id) setOpenId(null);
  };

  // ✅ EDIT (inline)
  const handleEdit = (id, newTitle) => {
    setGroups((prev) =>
      prev.map((g) => (g.id === id ? { ...g, title: newTitle } : g))
    );
  };

  return (
    <div className="bg-white shadow-md flex flex-col gap-5 rounded-[8px] my-3 p-8">
      <LeadsNavbar active={activeTab} onChange={setActiveTab} />

      <LeadsMain
        data={groups}
        openId={openId}
        onToggle={toggleGroup}
        onEdit={handleEdit}      // ✅ inline edit ishlaydi
        onDelete={handleDelete}  // ✅ delete ishlaydi
      />

      <LeadsBottom onAdd={addNewGroup} />
    </div>
  );
};

export default ArchiveLeads;
