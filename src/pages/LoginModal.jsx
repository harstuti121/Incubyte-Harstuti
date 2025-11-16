// import React, { useState } from "react";

// const LoginModal = ({ show, onClose }) => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(""); setSuccess("");

//     if (!formData.email || !formData.password) {
//       setError("Both fields are required");
//       return;
//     }

//     try {
//       const res = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           email: formData.email,
//           password: formData.password
//         })
//       });
//       const data = await res.json();
//       if (res.ok) {
//         setSuccess(data.message || "Login successful");
//         localStorage.setItem("token", data.token); 
//         setTimeout(() => onClose(), 1000);
//       } else {
//         setError(data.message || "Login failed");
//       }
//     } catch (err) {
//       setError(err.message || "Login failed");
//     }
//   };

//   if (!show) return null;

//   return (
//     <div className="modal show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
//       <div className="modal-dialog modal-dialog-centered">
//         <div className="modal-content p-4 sweet-modal">
//           <span onClick={onClose} style={{ cursor: "pointer", position: "absolute", top: "10px", right: "15px" }}>&times;</span>
//             <h4 className="text-center mb-3 sweet-title">Login</h4>
//           {error && <div className="alert alert-danger">{error}</div>}
//           {success && <div className="alert alert-success">{success}</div>}

//           <form onSubmit={handleSubmit}>
//             <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="form-control mb-2"/>
//             <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="form-control mb-2"/>
//             <button type="submit" className="btn btn-primary w-100">Login</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginModal;


// import { useNavigate } from "react-router-dom";

// const LoginModal = ({ show, onClose }) => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(""); setSuccess("");

//     if (!formData.email || !formData.password) {
//       setError("Both fields are required");
//       return;
//     }

//     try {
//       const res = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData)
//       });
//       const data = await res.json();

//       if (res.ok) {
//         localStorage.setItem("token", data.token);
//         setSuccess(data.message || "Login successful");

//         // Close modal & redirect
//         setTimeout(() => {
//           onClose();
//           navigate("/dashboard");
//         }, 1000);
//       } else {
//         setError(data.message || "Login failed");
//       }
//     } catch (err) {
//       setError(err.message || "Login failed");
//     }
//   };

//   if (!show) return null;

//   return (
//     <div className="modal show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
//       <div className="modal-dialog modal-dialog-centered">
//         <div className="modal-content p-4 sweet-modal">
//           <span onClick={onClose} style={{ cursor: "pointer", position: "absolute", top: "10px", right: "15px" }}>&times;</span>
//           <h4 className="text-center mb-3 sweet-title">Login</h4>
//           {error && <div className="alert alert-danger">{error}</div>}
//           {success && <div className="alert alert-success">{success}</div>}
//           <form onSubmit={handleSubmit}>
//             <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="form-control mb-2"/>
//             <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="form-control mb-2"/>
//             <button type="submit" className="btn btn-primary w-100">Login</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginModal;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const LoginModal = ({ show, onClose, onLoginSuccess }) => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     if (!formData.email || !formData.password) {
//       setError("Both fields are required");
//       return;
//     }

//     try {
//       const res = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         localStorage.setItem("token", data.token);
//         setSuccess(data.message || "Login successful");

//         // Fetch profile to get user name
//         const profileRes = await fetch("http://localhost:5000/api/auth/profile", {
//           headers: { Authorization: `Bearer ${data.token}` },
//         });
//         const profileData = await profileRes.json();

//         if (profileData.user) {
//           onLoginSuccess(profileData.user); // update navbar
//         }

//         setTimeout(() => {
//           onClose();
//           navigate("/dashboard"); // redirect to dashboard
//         }, 1000);
//       } else {
//         setError(data.message || "Login failed");
//       }
//     } catch (err) {
//       setError(err.message || "Login failed");
//     }
//   };

//   if (!show) return null;

//   return (
//     <div className="modal show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
//       <div className="modal-dialog modal-dialog-centered">
//         <div className="modal-content p-4 sweet-modal">
//           <span
//             onClick={onClose}
//             style={{ cursor: "pointer", position: "absolute", top: "10px", right: "15px" }}
//           >
//             &times;
//           </span>
//           <h4 className="text-center mb-3 sweet-title">Login</h4>
//           {error && <div className="alert alert-danger">{error}</div>}
//           {success && <div className="alert alert-success">{success}</div>}

//           <form onSubmit={handleSubmit}>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="form-control mb-2"
//             />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               className="form-control mb-2"
//             />
//             <button type="submit" className="btn btn-primary w-100">
//               Login
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginModal;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginModal = ({ show, onClose, onLoginSuccess }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.email || !formData.password) {
      setError("Both fields are required");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        setSuccess(data.message || "Login successful");

        if (data.user) onLoginSuccess(data.user); // update Navbar

        setTimeout(() => {
          onClose();
          navigate("/dashboard"); // redirect to dashboard
        }, 1000);
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError(err.message || "Login failed");
    }
  };

  if (!show) return null;

  return (
    <div className="modal show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-4 sweet-modal">
          <span
            onClick={onClose}
            style={{ cursor: "pointer", position: "absolute", top: "10px", right: "15px" }}
          >
            &times;
          </span>
          <h4 className="text-center mb-3 sweet-title">Login</h4>
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="form-control mb-2"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="form-control mb-2"
            />
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
