import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/home";
import VerifyPassword from "../pages/verify-password";
import PrivateRoute from "../components/private-route";
import AppLayout from "../components/home";

import Tasks from "../pages/tasks/Tasks";
import Employees from "../pages/employees/InnerCircle";
import Attendance from "../pages/attendance";
import Messenger from "../pages/messenger";
import Departments from "../pages/departments";
import Calendar from "../pages/calendar";
import Leads from "../pages/leads";
import Activity from "../pages/employees/activity";
import Profile from "../pages/employees/profile";
import Archive from "../pages/archive";
import Reports from "../pages/reports";
import Library from "../pages/library";
import CategoryDetailsPage from "../pages/library/CategoryDetailsPage";
import Settings from "../pages/settings";
import MainProfile from "../pages/main-profile/MainProfile";
import TaskDetails from "../pages/tasks/TaskDetails";
import Notification from "../pages/notification";
import Customers from "../pages/customers";
import CategoryCard from "../components/m-library/CategoryCard";

import LeadSide from "../components/lead-parts/leads-side";
import LeadsRight from "../components/lead-parts/leads-right";

import Dashboard from "../components/department-parts/dashboard";
import Notify from "../components/department-parts/notify";
import Team from "../components/department-parts/team";
import Recognition from "../components/department-parts/recognition";
import KnowladgeHub from "../components/department-parts/knowladge-hub";
import ArchiveTasks from "../components/archive/archive-tasks";
import ArchiveLibrary from "../components/archive/archive-library";
import ArchiveLeads from "../components/archive/archive-leads";
import ArchiveReports from "../components/archive/archive-reports";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        element: <AppLayout />,
        children: [
          { path: "", element: <Home /> },
          { path: "tasks", element: <Tasks /> },
          { path: "tasks/:projectId", element: <TaskDetails /> },

          { path: "customers", element: <Customers /> },
          { path: "employees", element: <Employees /> },
          { path: "messenger", element: <Messenger /> },
          { path: "departments", element: <Departments /> },
          { path: "calendar", element: <Calendar /> },
          { path: "leads", element: <Leads /> },
          { path: "leads-side", element: <LeadSide /> }, // Assuming you want to handle specific lead details
          { path: "leads-right/:boardId", element: <LeadsRight /> },
          { path: "reports", element: <Reports /> },
          { path: "library", element: <Library /> },
          { path: "library/id", element: <CategoryDetailsPage /> },
          { path: "category/:id", element: <CategoryDetailsPage /> },
          { path: "library/folders/:id", element: <CategoryCard /> },

          { path: "archive", element: <Archive /> },
          { path: "activity", element: <Activity /> },
          { path: "profile/:id", element: <Profile /> },
          { path: "settings", element: <Settings /> },
          { path: "main-profile", element: <MainProfile /> },
          { path: "notification", element: <Notification /> },
          { path: "attendance", element: <Attendance /> },

          { path: "/departments/dashboard", element: <Dashboard /> },
          { path: "/departments/notifier", element: <Notify /> },
          { path: "/departments/team", element: <Team /> },
          { path: "/departments/recognition", element: <Recognition /> },
          { path: "/departments/knowledge", element: <KnowladgeHub /> },

          { path: "/archive/tasks", element: <ArchiveTasks /> },
          { path: "/archive/m-library", element: <ArchiveLibrary /> },
          {path : "/archive/leads", element: <ArchiveLeads />},
          {path : "/archive/reports", element: <ArchiveReports/>},
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/verify-password",
    element: <VerifyPassword />,
  },
]);
