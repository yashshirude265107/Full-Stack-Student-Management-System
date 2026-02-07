function DashboardCards({ count }) {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div style={cardStyle}>👨‍🎓 Students<br />{count}</div>
      <div style={cardStyle}>📚 Courses<br />5</div>
      <div style={cardStyle}>📝 Marks<br />Pending</div>
    </div>
  );
}

const cardStyle = {
  background: "#e5e7eb",
  padding: "20px",
  borderRadius: "10px",
  width: "150px",
  textAlign: "center",
  fontWeight: "bold"
};

export default DashboardCards;
