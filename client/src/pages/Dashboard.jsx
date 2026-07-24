import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "../styles/dashboard.css";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [requests, setRequests] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await api.get("/leads");
        setRequests(response.data);
      } catch (error) {
        console.error("Error fetching requests:", error);
      }
    };

    fetchRequests();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const filteredRequests = requests.filter((request) => {
    return (
      request.projectName
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      request.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div>
          <h1>BEACON</h1>
          <p>Welcome back, {user?.name}.</p>
        </div>

        <div className="actions">
          <button
            className="primary-btn"
            onClick={() => navigate("/lead")}
          >
            + Request Consultation
          </button>

          <button
            className="secondary-btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </header>

      <section className="lead-section">
        <div className="lead-top">
          <h2>
            My Consultation Requests{" "}
            <span>{filteredRequests.length}</span>
          </h2>

          <input
            type="text"
            placeholder="Search by project or client..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
        </div>

        {filteredRequests.length === 0 ? (
          <p className="empty-state">
            You haven't submitted any consultation requests yet.
          </p>
        ) : (
          filteredRequests.map((request) => (
            <div className="lead-item" key={request._id}>
              <h3>{request.projectName}</h3>

              <p>
                <strong>Client:</strong> {request.name}
              </p>

              <p>
                <strong>Email:</strong> {request.email}
              </p>

              <div className="lead-details">
                <span>
                  <strong>Budget</strong>
                  <br />
                  {request.budget}
                </span>

                <span>
                  <strong>Status</strong>
                  <br />
                  {request.status}
                </span>
              </div>

              <div className="request-description">
                <strong>Project Description</strong>

                <p>{request.message}</p>
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
}

export default Dashboard;