import React from "react";
import { Link, useParams } from "react-router-dom";

const EditContact = () => {
  const params = useParams();
  return (
    <div class="container">
      <div className="my-5 py-5">
        <div className="card">
          <div className="card-header">Edit Contact</div>
          <div className="card-body">
            <form>
              <div className="row py-2">
                <div className="col-12">
                  <div className="form-group py-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="id"
                      value={params.id}
                    />
                  </div>
                  <div className="form-group py-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="form-group py-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="form-group py-2">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group py-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Gender"
                    />
                  </div>
                  <div className="form-group py-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ip Address"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-4"></div>
                <div className="col-2">
                  <button className="btn btn-primary">
                    <i className="bi bi-person-rolodex"></i> Edit Contact
                  </button>
                </div>
                <div className="col-2">
                  <Link to="/" className="btn btn-danger">
                    <i className="bi bi-person-rolodex"></i> Cancel
                  </Link>
                </div>
                <div className="col-4"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditContact;
