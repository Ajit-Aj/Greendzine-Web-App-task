import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import BottomNav from "./components/bottomNav";
import Profile from "./components/profile";
import Home from "./components/home";
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/profile" element={<Profile/>} />
        <Route path="/home" element={<Home/>} />
        <Route
          path="/"
          element={
            <Login
              onLoginSuccess={handleLoginSuccess}
              isLoggedIn={isLoggedIn}
            />
          }
        />
      </Routes>
      {isLoggedIn && <BottomNav />}
    </Router>
  );
};

export default App;

// import React from 'react'
// import Login from "./component/login"
// const App = () => {
//   return (
//     <div><Login/></div>
//   )
// }

// export default App
