// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// export default function Navbar({ onLoginClick, onRegisterClick }) {
//   return (
//     <nav className="navbar-sweet d-flex justify-content-between align-items-center">
//   <h3 style={{ color: "white", margin: 0 }}>🍬 SweetShop</h3>
//   <div className="nav-buttons">
//     <button onClick={onLoginClick}>Login</button>
//     <button onClick={onRegisterClick}>Register</button>
//   </div>
//   </nav>
//   );
// }


// import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// export default function Navbar({ onLoginClick, onRegisterClick }) {
//   const [user, setUser] = useState(null);

//   // Load user profile if token exists
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

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//     window.location.reload(); // optional: reload to reset state
//   };

//   return (
//     <nav className="navbar-sweet d-flex justify-content-between align-items-center p-3" style={{backgroundColor: "#ff6f61"}}>
//       <h3 style={{ color: "white", margin: 0 }}>🍬 SweetShop</h3>

//       <div className="nav-buttons">
//         {user ? (
//           <>
//             <span style={{ color: "white", marginRight: "15px" }}>Welcome, {user.name}</span>
//             <button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>
//           </>
//         ) : (
//           <>
//             <button className="btn btn-light me-2" onClick={onLoginClick}>Login</button>
//             <button className="btn btn-light" onClick={onRegisterClick}>Register</button>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// }


import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar({ user, onLoginClick, onRegisterClick, onLogout }) {
  return (
    <nav
      className="navbar-sweet d-flex justify-content-between align-items-center p-3"
      style={{ backgroundColor: "#ff6f61" }}
    >
      <h3 style={{ color: "white", margin: 0 }}>🍬 SweetShop</h3>

      <div className="nav-buttons">
        {user ? (
          <>
            <span style={{ color: "white", marginRight: "15px" }}>
              Welcome, {user.name}
            </span>
            <button className="btn btn-outline-light" onClick={onLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <button className="btn btn-light me-2" onClick={onLoginClick}>
              Login
            </button>
            <button className="btn btn-light" onClick={onRegisterClick}>
              Register
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
