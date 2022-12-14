import { Link } from "react-router-dom";
import backImg from "../images/settings.png";
import "../css/Settings.css";

const Settings = (props) => {
  function handleLogout(e) {
    e.preventDefault();
    window.history.replaceState(null, null, "/");
    window.location.reload();
  }

  return (
    <>
      <div id="settings" className="container">
        <img src={backImg} className="backgroundImg"></img>
        <h1>Settings</h1>
        <hr/>
        <h2 className="sectionHeader">User options:</h2>
        <div className="container">
          <div className="row">
            <button className="btn btn-danger adminBtn">
              <Link to="/changePassword">
                <h4>Change your password</h4>
              </Link>
            </button>
          </div>
        </div>
        <hr/>
        <h2 className="sectionHeader">System:</h2>
        <div className="container">
          <div className="row">
            <div>
              <button className="btn btn-danger adminBtn" onClick={handleLogout}>
                <h4>Log out of system</h4>
              </button>
            </div>
          </div>
        </div>
        <hr/>
      </div>
    </>
  );
};

export default Settings;
