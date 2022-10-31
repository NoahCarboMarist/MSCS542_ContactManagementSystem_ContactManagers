import SideNav from "../Components/SideNav";
import Dashboard from "./Dashboard";
import Account from "./Account";
import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../css/Main.css';
import $ from 'jquery';

const Main = (props) => {
  const [newClass, setClass] = useState("");
  const [firstRun, setFirstRun] = useState(true);

  useEffect(() => {
    if (firstRun) {
      // max hex color value is (16*16) * (16*16) * (16*16) - 1 = 16777215
      $("#userProfileImg").css({ "background": "#" + Math.floor(Math.random() * 16777215).toString(16) });
      setFirstRun(false);
    }
  });

  return (
    <>
      <div id="main">
        <nav className={`sidenav p-3 py-4 ${newClass}`}>
          <SideNav setActive={setClass}/>
        </nav>
        <div id="userProfile">
          <p>{props.name}</p>
          <div id="userProfileImg"></div>
        </div>

        <div id="routes" className="p-4 p-md-5 pt-5">
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/account" element={<Account/>}/>
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Main;
