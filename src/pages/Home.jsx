// import React, { useState } from "react";
// import RegisterModal from "./RegisterModal";
// import LoginModal from "./LoginModal";

// const Home = () => {
//   const [showRegister, setShowRegister] = useState(false);
//   const [showLogin, setShowLogin] = useState(false);

//   return (
//     <div className="text-center mt-5">
//       <h1 className="mb-4">Welcome to Sweet Shop</h1>

//       <button
//         className="btn btn-primary me-2"
//         onClick={() => setShowRegister(true)}
//       >
//         Register
//       </button>
//       <button
//         className="btn btn-success"
//         onClick={() => setShowLogin(true)}
//       >
//         Login
//       </button>

//       <RegisterModal show={showRegister} onClose={() => setShowRegister(false)} />
//       <LoginModal show={showLogin} onClose={() => setShowLogin(false)} />
//     </div>
//   );
// };

// export default Home;


// import React, { useState } from "react";
// import RegisterModal from "./RegisterModal";
// import LoginModal from "./LoginModal";
// import Dashboard from "./Dashboard";

// const Home = () => {
//   const [showRegister, setShowRegister] = useState(false);
//   const [showLogin, setShowLogin] = useState(false);

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
//         <div className="container">
//           <a className="navbar-brand fw-bold text-primary" href="/">Sweet Shop</a>
//           <div className="ms-auto">
//             <button className="btn btn-outline-primary me-2" onClick={() => setShowLogin(true)}>Login</button>
//             <button className="btn btn-primary" onClick={() => setShowRegister(true)}>Register</button>
//           </div>
//         </div>
//       </nav>

//       {showRegister && <RegisterModal show={showRegister} onClose={() => setShowRegister(false)} />}
//       {showLogin && <LoginModal show={showLogin} onClose={() => setShowLogin(false)} />}

//       <main className="container my-4">
//         <Dashboard />
//       </main>
//     </div>
//   );
// };

// export default Home;
// import React, { useState, useEffect } from "react";

// // ------------------- Navbar -------------------
// const Navbar = ({ openLogin, openRegister, isLoggedIn, logout }) => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
//       <div className="container">
//         <a className="navbar-brand fw-bold text-primary" href="/">Sweet Shop</a>

//         <div className="ms-auto">
//           {!isLoggedIn ? (
//             <>
//               <button className="btn btn-outline-primary me-2" onClick={openLogin}>Login</button>
//               <button className="btn btn-primary" onClick={openRegister}>Register</button>
//             </>
//           ) : (
//             <button className="btn btn-danger" onClick={logout}>Logout</button>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// // ------------------- Login Modal -------------------
// const LoginModal = ({ show, close, onSuccess }) => {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");

//   const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const submit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const res = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form)
//       });
//       const data = await res.json();

//       if (!res.ok) return setError(data.message);

//       localStorage.setItem("token", data.token);
//       onSuccess();
//       close();
//     } catch (err) {
//       setError("Login failed");
//     }
//   };

//   if (!show) return null;

//   return (
//     <div className="modal show d-block" style={{ background: "rgba(0,0,0,0.5)" }}>
//       <div className="modal-dialog modal-dialog-centered">
//         <div className="modal-content p-3">
//           <span onClick={close} style={{ position: "absolute", right: "15px", top: "10px", cursor: "pointer" }}>×</span>
//           <h4 className="text-center">Login</h4>

//           {error && <div className="alert alert-danger">{error}</div>}

//           <form onSubmit={submit}>
//             <input name="email" placeholder="Email" type="email" className="form-control mb-2" onChange={handle} />
//             <input name="password" placeholder="Password" type="password" className="form-control mb-2" onChange={handle} />
//             <button className="btn btn-primary w-100 mt-2">Login</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// // ------------------- Register Modal -------------------
// const RegisterModal = ({ show, close }) => {
//   const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const submit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     if (form.password !== form.confirmPassword) return setError("Passwords don't match");

//     try {
//       const res = await fetch("http://localhost:5000/api/auth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form)
//       });

//       const data = await res.json();
//       if (!res.ok) return setError(data.message);

//       setSuccess("Registered successfully!");
//       setTimeout(close, 1000);
//     } catch (err) {
//       setError("Register failed");
//     }
//   };

//   if (!show) return null;

//   return (
//     <div className="modal show d-block" style={{ background: "rgba(0,0,0,0.5)" }}>
//       <div className="modal-dialog modal-dialog-centered">
//         <div className="modal-content p-3">
//           <span onClick={close} style={{ position: "absolute", right: "15px", top: "10px", cursor: "pointer" }}>×</span>
//           <h4 className="text-center">Register</h4>

//           {error && <div className="alert alert-danger">{error}</div>}
//           {success && <div className="alert alert-success">{success}</div>}

//           <form onSubmit={submit}>
//             <input name="name" placeholder="Full Name" className="form-control mb-2" onChange={handle} />
//             <input name="email" type="email" placeholder="Email" className="form-control mb-2" onChange={handle} />
//             <input name="password" type="password" placeholder="Password" className="form-control mb-2" onChange={handle} />
//             <input name="confirmPassword" type="password" placeholder="Confirm Password" className="form-control mb-2" onChange={handle} />

//             <button className="btn btn-primary w-100 mt-2">Register</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// // ------------------- Dashboard -------------------
// const Dashboard = () => {
//   const [sweets, setSweets] = useState([]);

//   const loadData = async () => {
//     const res = await fetch("http://localhost:5000/api/sweets");
//     const data = await res.json();
//     setSweets(data);
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   return (
//     <div className="container mt-4">
//       <h3 className="mb-3">Available Sweets 🍭</h3>

//       <div className="row">
//         {sweets.map((sw) => (
//           <div className="col-md-3" key={sw._id}>
//             <div className="card shadow-sm mb-3">
//               <div className="card-body">
//                 <h5>{sw.name}</h5>
//                 <p className="m-0">₹{sw.price}</p>
//                 <p className="m-0">Qty: {sw.quantity}</p>

//                 <button
//                   className="btn btn-primary mt-2 w-100"
//                   disabled={sw.quantity === 0}
//                 >
//                   {sw.quantity === 0 ? "Out of Stock" : "Purchase"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // ------------------- MAIN HOME PAGE -------------------
// export default function Home() {
//   const [showLogin, setShowLogin] = useState(false);
//   const [showRegister, setShowRegister] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token"));

//   const logout = () => {
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//   };

//   return (
//     <>
//       <Navbar
//         openLogin={() => setShowLogin(true)}
//         openRegister={() => setShowRegister(true)}
//         isLoggedIn={isLoggedIn}
//         logout={logout}
//       />

//       {showLogin && (
//         <LoginModal
//           show={showLogin}
//           close={() => setShowLogin(false)}
//           onSuccess={() => setIsLoggedIn(true)}
//         />
//       )}

//       {showRegister && (
//         <RegisterModal show={showRegister} close={() => setShowRegister(false)} />
//       )}

//       {isLoggedIn ? (
//         <Dashboard />
//       ) : (
//         <div className="text-center mt-5">
//           <h2>Welcome to Sweet Shop 🍬</h2>
//           <p>Please login or register to continue.</p>
//         </div>
//       )}
//     </>
//   );
// }


// import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import AuthModal from "../components/AuthModal";
// import Dashboard from "./Dashboard";

// export default function Home() {
//   const [showAuth, setShowAuth] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token"));

//   return (
//     <>
//       <Navbar onAuthClick={() => setShowAuth(true)} isLoggedIn={isLoggedIn} />

//       {showAuth && (
//         <AuthModal
//           close={() => setShowAuth(false)}
//           onSuccess={(token) => {
//             localStorage.setItem("token", token);
//             setIsLoggedIn(true);
//             setShowAuth(false);
//           }}
//         />
//       )}

//       {isLoggedIn ? (
//         <Dashboard />
//       ) : (
//         <div className="text-center mt-5">
//           <h2>Welcome to Sweet Shop 🍭</h2>
//           <p>Please login or register to continue.</p>
//         </div>
//       )}
//     </>
//   );
// }


// import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import AuthModal from "../components/AuthModal";
// import Dashboard from "./Dashboard";

// export default function Home() {
//   const [showAuth, setShowAuth] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token"));

//   return (
//     <>
//       <Navbar onAuthClick={() => setShowAuth(true)} isLoggedIn={isLoggedIn} />

//       {showAuth && (
//         <AuthModal
//           close={() => setShowAuth(false)}
//           onSuccess={(token) => {
//             localStorage.setItem("token", token);
//             setIsLoggedIn(true);
//             setShowAuth(false);
//           }}
//         />
//       )}

//       {isLoggedIn ? (
//         <Dashboard />
//       ) : (
//         <div className="container text-center mt-5">
//           <h1 className="mb-3">Sweet Shop 🍭</h1>
//           <p className="text-muted">Login or Register to continue</p>
//         </div>
//       )}
//     </>
//   );
// }


import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import RegisterModal from "./RegisterModal.jsx";
import LoginModal from "./LoginModal.jsx";
import Dashboard from "./Dashboard.jsx";

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div>
      <Navbar
        onLoginClick={() => {
          setShowLogin(true);
          setShowRegister(false);
        }}
        onRegisterClick={() => {
          setShowRegister(true);
          setShowLogin(false);
        }}
      />

      {showLogin && (
        <LoginModal show={showLogin} onClose={() => setShowLogin(false)} />
      )}

      {showRegister && (
        <RegisterModal show={showRegister} onClose={() => setShowRegister(false)} />
      )}

      <div className="container mt-4">
        <Dashboard />
      </div>
    </div>
  );
}
