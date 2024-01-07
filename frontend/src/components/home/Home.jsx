import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
const Home = () => {
  return (
    <div className="home d-flex justify-content-center align-items-center">
      <div className="container d-flex justify-content-center align-items-center flex-column ">
        <h1 className="text-center">Get your work and life in order definitively.</h1>
        <br/>
        <p>Acquire focus, method, and composure through our task tracker app</p>
        <div>India's top-ranked task supervisor</div>
        <br />
        <button class="home-btn p-2">
          <Link className="nav-link active" aria-current="page" to="/todo">
            Add Your Task
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
