import React from "react";

const EditContact = () => {
  return (
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
                  placeholder="Name"
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
                  placeholder="Phone Number"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
              <button className="btn btn-primary">
                <i className="bi bi-person-rolodex"></i> Edit Contact
              </button>
            </div>
            <div className="col-4"></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
