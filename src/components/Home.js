import React from "react";
import { Link } from "react-router-dom";
import { getAllContacts } from "../contact";

const Home = () => {
  const contacts = getAllContacts();
  return (
    <div class="container">
      <div className="my-5 py-5">
        <div className="card">
          <div className="card-header">Home</div>
          <div className="card-body">
            <div className="row py-2">
              <div className="col-12 text-end">
                <Link to="contact" className="btn btn-primary">
                  <i className="bi bi-person-rolodex"></i> Add Contact
                </Link>
              </div>
            </div>
            <div className="row py-2">
              <div className="col-12 text-end">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Gender</th>
                      <th scope="col">Ipd Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map((c) => {
                      return (
                        <tr key={c.id}>
                          <th scope="row">
                            <Link to={"/contact/" + c.id}>{c.id}</Link>
                          </th>
                          <td>{c.first_name}</td>
                          <td>{c.last_name}</td>
                          <td>{c.email}</td>
                          <td>{c.gender}</td>
                          <td>{c.ip_address}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
