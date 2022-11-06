import Login from "./Login";
import SideNav from "../Components/SideNav";
import Dashboard from "./Dashboard";
import Messages from "./Messages";
import Employees from "./Employees";
import Users from "./Users";
import EmailHistory from "./EmailHistory";
import Groups from "./Groups";
import Contacts from "./Contacts";
import Account from "./Account";
import Settings from "./Settings";
import CreateAccount from "../Views/CreateAccount.js"
import Admin from "../Views/Admin.js"
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../css/Main.css';
import $ from 'jquery';

const Main = (props) => {
  const [newClass, setClass] = useState("");
  const [firstRun, setFirstRun] = useState(true);

  useEffect(() => {
    if (firstRun) {
      // max hex color value is (16*16) * (16*16) * (16*16) - 1 = 16777215
      let newHexVal = [ String(Math.floor(Math.random() * 63) + 1).toString(16), String(Math.floor(Math.random() * 63) + 1).toString(16), String(Math.floor(Math.random() * 63) + 1).toString(16) ];
      let finalNum = "#";
      newHexVal.forEach((item, i) => {
        finalNum += item;
      });

      $("body").append("<style>.rngColor{background:" + finalNum + "!important;}</style>");
      setFirstRun(false);
    }

    const script = document.createElement('script');
    script.src = "../electron/renderer.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <>
      <div id="main">
        <nav className={`sidenav p-3 py-4 ${newClass}`}>
          <SideNav setActive={setClass} admin={props.admin}/>
        </nav>
        <div id="userProfile" className="rngColor">
          <p>{props.name}</p>
          { props.admin ? <AdminView /> : null }
        </div>

        <div id="routes" className="p-4 p-md-5 pt-5">
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/messages" element={<Messages/>}/>
            <Route path="/employees" element={<Employees/>}/>
            <Route path="/users" element={<Users/>}/>
            <Route path="/emailHistory" element={<EmailHistory/>}/>
            <Route path="/groups" element={<Groups/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
            <Route path="/account" element={<Account/>}/>
            <Route path="/settings" element={<Settings/>}/>
            <Route path="/createAccount" element={<CreateAccount/>}/>
            <Route path="/admin" element={<Admin admin={props.admin}/>}/>
            <Route render={
              ()=>(<Navigate to="/login"/>)}
            />
          </Routes>
        </div>
      </div>
    </>
  );
};

const AdminView = (props) => {
  useEffect(() => {
    console.log("admined");
  }, []);
  return (
    <>
      <p className="admin">admin mode</p>
    </>
  );
};

export default Main;
