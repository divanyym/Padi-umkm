import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div style={{ height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Homepage</h1>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/landing" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Landing
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/overview" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Overview
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
