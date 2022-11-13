import { Link } from "react-router-dom";
import { useState } from 'react';
import "../css/Admin.css";

const Admin = (props) => {
  return (
    <>
      <div id="admin" className="container">
        <h2>Admin</h2>
        <hr/>
        <div className="row">
          <div className="col">
            <p>Create a new user entry</p>
            <button className="btn btn-primary">
              <Link to="/createAccount">Create new user</Link>
            </button>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col">
            <p>Delete a user entry</p>
            <button className="btn btn-danger">
              <Link to="/deleteAccount">Delete a user</Link>
            </button>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col">
            <p>Edit data in Relationship Table</p>
            <button className="btn btn-primary">
              <Link to="/editRelationshipTable">Edit Relationship Table</Link>
            </button>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col">
            <p>Edit data in GroupDetails Table</p>
            <button className="btn btn-primary">
              <Link to="/editGroupDetailsTable">Edit GroupDetails Table</Link>
            </button>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col">
            <p>Edit data in GroupDetails Table</p>
            <button className="btn btn-primary">
              <Link to="/editGroupMembersTable">Edit GroupMembers Table</Link>
            </button>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col">
            <p>Edit data in Certified Table</p>
            <button className="btn btn-primary">
              <Link to="/editCertifiedTable">Edit Certified Table</Link>
            </button>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col">
            <p>Edit data in Certifications Table</p>
            <button className="btn btn-primary">
              <Link to="/editCertificationTable">Edit Certification Table</Link>
            </button>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col">
            <p>Edit data in Supervisor Table</p>
            <button className="btn btn-primary">
              <Link to="/editSupervisorTable">Edit Supervisor Table</Link>
            </button>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col">
            <p>Edit data in Employees table</p>
            <button className="btn btn-primary">
              <Link to="/editEmployeeTable">Edit Employee Table</Link>
            </button>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col">
            <p>Edit data in Users table</p>
            <button className="btn btn-primary">
              <Link to="/editUserTable">Edit Users Table</Link>
            </button>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col">
            <p>Edit data in Messages table</p>
            <button className="btn btn-primary">
              <Link to="/editMessagesTable">Edit Messages Table</Link>
            </button>
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col">
            <p>table editor</p>
            <button className="btn btn-primary">
              <Link to="/test">table editor</Link>
            </button>
          </div>
        </div>
        <hr/>
      </div>
    </>
  );
};

export default Admin;
