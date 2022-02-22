import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="card">
      <div className="card-header">Home</div>
      <div className="card-body">
        <div className="row py-2">
          <div className="col-12 text-end">
            <Link to="contacts" className="btn btn-primary">
              <i className="bi bi-person-rolodex"></i> Add Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
