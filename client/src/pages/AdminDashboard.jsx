import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "../styles/dashboard.css";

function AdminDashboard() {
  const [requests, setRequests] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const response = await api.get("/leads");
      setRequests(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Update consultation request status
  const updateStatus = async (id, status) => {
    try {
      await api.put(`/leads/${id}`, { status });

      setRequests((prevRequests) =>
        prevRequests.map((request) =>
          request._id === id
            ? { ...request, status }
            : request
        )
      );
    } catch (error) {
      console.error(error);
      alert("Failed to update status.");
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div>
          <h1>BEACON ADMIN</h1>
          <p>Manage all consultation requests.</p>
        </div>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>
      </header>

      <section className="lead-section">
        <h2>
          All Consultation Requests{" "}
          <span>{requests.length}</span>
        </h2>

        {requests.map((request) => (
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

            <div style={{ marginTop: "20px" }}>
              <label>
                <strong>Update Status</strong>
              </label>

              <br />

              <select
                value={request.status}
                onChange={(e) =>
                  updateStatus(request._id, e.target.value)
                }
              >
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Closed">Closed</option>
              </select>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default AdminDashboard;