// import React, { useState } from "react";
// import "./App.css";
// import Navbar from "./components/Navbar.jsx";
// import SweetGrid from "./components/SweetsGrid.jsx";
// import LoginModal from "./pages/LoginModal.jsx";
// import RegisterModal from "./pages/RegisterModal.jsx";

// function App() {
//   const [showLogin, setShowLogin] = useState(false);
//   const [showRegister, setShowRegister] = useState(false);

//   // Functions to pass to Navbar
//   const handleLoginClick = () => {
//     setShowLogin(true);
//     setShowRegister(false);
//   };

//   const handleRegisterClick = () => {
//     setShowRegister(true);
//     setShowLogin(false);
//   };

//   return (
//     <>
//       <Navbar 
//         onLoginClick={handleLoginClick} 
//         onRegisterClick={handleRegisterClick} 
//       />

//       <SweetGrid />

//       {/* Modals */}
//       <LoginModal show={showLogin} onClose={() => setShowLogin(false)} />
//       <RegisterModal show={showRegister} onClose={() => setShowRegister(false)} />
//     </>
//   );
// }

// export default App;


// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import "./App.css";
// import Navbar from "./components/Navbar";
// import SweetGrid from "./components/SweetsGrid";
// import LoginModal from "./pages/LoginModal";
// import RegisterModal from "./pages/RegisterModal";
// import Dashboard from "./pages/Dashboard";

// function App() {
//   const [showLogin, setShowLogin] = useState(false);
//   const [showRegister, setShowRegister] = useState(false);
//   const [user, setUser] = useState(null);

//   // Check if user is logged in on mount
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) return;

//     fetch("http://localhost:5000/api/auth/login", {
//       headers: { Authorization: `Bearer ${token}` },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.user) setUser(data.user);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   const handleLoginClick = () => {
//     setShowLogin(true);
//     setShowRegister(false);
//   };

//   const handleRegisterClick = () => {
//     setShowRegister(true);
//     setShowLogin(false);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//     window.location.reload(); // optional: refresh to reset state
//   };

//   return (
//     <Router>
//       <Navbar
//         onLoginClick={handleLoginClick}
//         onRegisterClick={handleRegisterClick}
//         user={user}
//         onLogout={handleLogout}
//       />

//       <Routes>
//         <Route path="/" element={<SweetGrid />} />
//         <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/" />} />
//       </Routes>

//       {/* Modals */}
//       <LoginModal
//         show={showLogin}
//         onClose={() => setShowLogin(false)}
//         onLoginSuccess={(loggedUser) => setUser(loggedUser)}
//       />
//       <RegisterModal
//         show={showRegister}
//         onClose={() => setShowRegister(false)}
//         onRegisterSuccess={(loggedUser) => setUser(loggedUser)}
//       />
//     </Router>
//   );
// }

// export default App;


import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import SweetGrid from "./components/SweetsGrid.jsx";
import LoginModal from "./pages/LoginModal.jsx";
import RegisterModal from "./pages/RegisterModal.jsx";
import Dashboard from "./pages/Dashboard.jsx";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <Router>
      <Navbar
        user={user}
        onLoginClick={() => setShowLogin(true)}
        onRegisterClick={() => setShowRegister(true)}
        onLogout={handleLogout}
      />

      <Routes>
        <Route path="/" element={<SweetGrid />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <LoginModal
        show={showLogin}
        onClose={() => setShowLogin(false)}
        onLoginSuccess={handleLoginSuccess}
      />
      <RegisterModal
        show={showRegister}
        onClose={() => setShowRegister(false)}
      />
    </Router>
  );
}

export default App;
