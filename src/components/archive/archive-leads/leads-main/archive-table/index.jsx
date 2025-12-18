import { useState } from "react";
import ArchiveCheckbox from "./archive-checkbox";

const ArchiveTable = () => {
  // tanlangan leadlarni tozalash funksiyasi
  const clearSelection = () => {
    setLeads(leads.map((lead) => ({ ...lead, checked: false })));
  };

  const [leads, setLeads] = useState([
    {
      id: 1,
      checked: false,
      name: "Fretta (caffee)",
      phone: "97 156 57 11",
      source: "Outreach",
      owner: "Yunusxo'ja Rixsiboyev",
      status: "follow-up",
      notes: "Xabar olish",
      value: "$0",
      timeline: "2025-09-11 -",
      lastUpdated: "26/09/2025 10:39",
    },
    {
      id: 2,
      checked: false,
      name: "oxymed (medicine)",
      phone: "90 952 15 58",
      source: "Outreach",
      owner: "Yunusxo'ja Rixsiboyev",
      status: "follow-up",
      notes: "Malika marketing bo'lim boshlig'i.",
      value: "$0",
      timeline: "2025-09-08 -",
      lastUpdated: "10/09/2025 12:42",
    },
    {
      id: 3,
      checked: false,
      name: "Uzbechka burger",
      phone: "909533445",
      source: "Outreach",
      owner: "Yunusxo'ja Rixsiboyev",
      status: "minus",
      notes: "Nima boldi",
      value: "$0",
      timeline: "2025-09-21 -",
      lastUpdated: "26/09/2025 19:31",
    },
  ]);

  const [columns, setColumns] = useState([
    { key: "name", title: "Leads", minWidth: "min-w-[150px]", isNew: false },
    {
      key: "phone",
      title: "Phone Number",
      minWidth: "min-w-[150px]",
      isNew: false,
    },
    { key: "source", title: "Source", minWidth: "min-w-[100px]", isNew: false },
    { key: "owner", title: "Owner", minWidth: "min-w-[200px]", isNew: false },
    { key: "status", title: "Status", minWidth: "min-w-[180px]", isNew: false },
    { key: "notes", title: "Notes", minWidth: "min-w-[250px]", isNew: false },
    {
      key: "value",
      title: "Potential value",
      minWidth: "min-w-[200px]",
      isNew: false,
    },
    {
      key: "timeline",
      title: "Timeline",
      minWidth: "min-w-[150px]",
      isNew: false,
    },
    {
      key: "lastUpdated",
      title: "Last Updated",
      minWidth: "min-w-[150px]",
      isNew: false,
    },
  ]);

  const [editingColumn, setEditingColumn] = useState(null); // tahrirlash uchun column key

  const owners = ["Yunusxo'ja Rixsiboyev", "Malika", "Other"];
  const statuses = ["follow-up", "minus"];

  const toggleCheck = (id) => {
    setLeads(
      leads.map((lead) =>
        lead.id === id ? { ...lead, checked: !lead.checked } : lead
      )
    );
  };

  const handleStatusChange = (id, newStatus) => {
    setLeads(
      leads.map((lead) =>
        lead.id === id ? { ...lead, status: newStatus } : lead
      )
    );
  };

  const handleOwnerChange = (id, newOwner) => {
    setLeads(
      leads.map((lead) =>
        lead.id === id ? { ...lead, owner: newOwner } : lead
      )
    );
  };

  const handleAddColumn = () => {
    const key = `col_${Date.now()}`;
    setColumns([
      ...columns,
      { key, title: "New Column", minWidth: "min-w-[150px]", isNew: true },
    ]);
    setLeads(leads.map((row) => ({ ...row, [key]: "" })));
    setEditingColumn(key); // yangi column darhol edit rejimida ochilsin
  };

  const handleDeleteColumn = (key) => {
    setColumns(columns.filter((col) => col.key !== key));
    setLeads(
      leads.map((row) => {
        const copy = { ...row };
        delete copy[key];
        return copy;
      })
    );
  };

  const handleTitleChange = (key, newTitle) => {
    setColumns(
      columns.map((col) =>
        col.key === key ? { ...col, title: newTitle } : col
      )
    );
  };

  return (
    <div className="w-full overflow-x-auto hide-scrollbar">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-blue-200 border border-gray-300">
            <th className="border border-gray-300 p-3 font-semibold text-center text-sm w-12"></th>
            {columns.map((col) => (
              <th
                key={col.key}
                className={`border border-gray-300 p-3 font-semibold text-sm text-center ${col.minWidth}`}
              >
                <div className="flex justify-center items-center gap-2">
                  {editingColumn === col.key ? (
                    <input
                      autoFocus
                      value={col.title}
                      onChange={(e) =>
                        handleTitleChange(col.key, e.target.value)
                      }
                      onBlur={() => setEditingColumn(null)}
                      onKeyDown={(e) =>
                        e.key === "Enter" && setEditingColumn(null)
                      }
                      className="text-center w-full text-sm"
                    />
                  ) : (
                    <span
                      onClick={() => col.isNew && setEditingColumn(col.key)}
                      className="cursor-pointer"
                    >
                      {col.title}
                    </span>
                  )}
                  {col.isNew && (
                    <button
                      onClick={() => handleDeleteColumn(col.key)}
                      className="text-red-500 font-bold"
                    >
                      X
                    </button>
                  )}
                </div>
              </th>
            ))}
            <th className="border border-gray-300 p-3 font-semibold text-sm text-center w-32">
              <button onClick={handleAddColumn}>+</button>
            </th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead) => (
            <tr
              key={lead.id}
              className="hover:bg-gray-50 border border-gray-300"
            >
              <td className="border border-gray-300 p-3 text-center">
                <input
                  type="checkbox"
                  checked={lead.checked}
                  onChange={() => toggleCheck(lead.id)}
                  className="w-4 h-4 cursor-pointer"
                />
              </td>
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={`border border-gray-300 p-3 text-sm text-center ${col.minWidth}`}
                >
                  {col.key === "owner" ? (
                    <select
                      value={lead.owner}
                      onChange={(e) =>
                        handleOwnerChange(lead.id, e.target.value)
                      }
                      className="appearance-none bg-transparent text-sm text-center cursor-pointer"
                    >
                      {owners.map((owner) => (
                        <option key={owner} value={owner}>
                          {owner}
                        </option>
                      ))}
                    </select>
                  ) : col.key === "status" ? (
                    <select
                      value={lead.status}
                      onChange={(e) =>
                        handleStatusChange(lead.id, e.target.value)
                      }
                      className="appearance-none bg-transparent text-sm text-center cursor-pointer"
                    >
                      {statuses.map((status) => (
                        <option key={status} value={status}>
                          {status === "follow-up"
                            ? "● Taklif berilgan"
                            : "● Minus"}
                        </option>
                      ))}
                    </select>
                  ) : col.isNew ? (
                    <input
                      value={lead[col.key]}
                      onChange={(e) =>
                        setLeads(
                          leads.map((row) =>
                            row.id === lead.id
                              ? { ...row, [col.key]: e.target.value }
                              : row
                          )
                        )
                      }
                    />
                  ) : (
                    lead[col.key]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>

        {leads.some((lead) => lead.checked) && (
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
            <ArchiveCheckbox
              selectedCount={leads.filter((l) => l.checked).length}
              onClear={clearSelection} // <-- bu yerda uzatyapmiz
            />
          </div>
        )}
      </table>
    </div>
  );
};

export default ArchiveTable;
