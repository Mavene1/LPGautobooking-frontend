import React, { useState } from "react";
// import Hero from './components/Hero';
// import Charts from './components/Charts';
// import Footer from './components/Footer';
import Login1 from "./pages/Login1";
//import Signup1 from "./pages/Signup1";
//import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./pages/Vendor/Sidebar";

function App() {
  const [token, setToken] = useState();
  const [user, setUser] = useState();

  if (!token) {
    return <Login1 setToken={setToken} setUser={setUser} />;
  }
  
  if (user.roles.includes("vendor")) {
    return (
      <Sidebar
        token={token}
        user={user}
        setToken={setToken}
        setUser={setUser}
      />
    );
  } else {
    return <Home setToken={setToken} token={token}/>;
  }
}

export default App;
