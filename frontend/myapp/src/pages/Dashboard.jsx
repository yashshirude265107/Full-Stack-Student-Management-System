import Sidebar from "../components/Sidebar";
import DashboardCards from "../components/DashboardCards";
import StudentList from "../components/StudentList";

function Dashboard() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ padding: "20px", flex: 1 }}>
        <h1>Dashboard</h1>
        <DashboardCards count={10} />
        <br />
        <StudentList />
      </div>
    </div>
  );
}

export default Dashboard;
