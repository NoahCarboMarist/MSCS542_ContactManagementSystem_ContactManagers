import { useState, useEffect } from "react";
import Login from "./Login";
import Main from "./Main";
import CreateAccount from "./CreateAccount";
import "../css/App.css";

function App() {
  const [loggedIn, setLogin] = useState(false);
  const [createAccount, setCreateAccount] = useState(false);
  const [page, setPage] = useState("login");
  const [username, setUserName] = useState("");


  useEffect(() => {
    const script = document.createElement('script');
    script.src = "../electron/renderer.js";
    script.type = "text/babel";
    script.async = true;
    console.log(script);

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <>
      <div className="App">
        { (loggedIn == true) ?
          <Main name={username}/> :
          (createAccount == true) ?
            <CreateAccount
              loggedIn={setLogin}
              setUserEmail={setUserName}
              setLoginView={setCreateAccount}
            /> :
            <Login
              loggedIn={setLogin}
              setUserEmail={setUserName}
              createAccount={setCreateAccount}
            /> }
      </div>
    </>
  );
}

export default App;
