// import React, { useState } from "react";
// import { api } from "../services/api";


// export default function AuthModal({ close, onLogin }) {
// const [mode, setMode] = useState("login");
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");


// const handleSubmit = async () => {
// try {
// if (mode === "login") {
// const res = await api.post("/auth/login", { email, password });
// localStorage.setItem("token", res.token);
// } else {
// await api.post("/auth/register", { email, password });
// }
// onLogin();
// close();
// } catch (err) {
// alert("Error: " + err.message);
// }
// };


// return (
// <div className="modal-overlay">
// <div className="modal">
// <h2>{mode === "login" ? "Login" : "Register"}</h2>
// <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
// <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />


// <button className="btn primary" onClick={handleSubmit}>
// {mode === "login" ? "Login" : "Register"}
// </button>


// <p className="switch-text" onClick={() => setMode(mode === "login" ? "register" : "login")}>
// {mode === "login" ? "New user? Register" : "Already have an account? Login"}
// </p>


// <button className="btn" onClick={close}>Close</button>
// </div>
// </div>
// );
// }


// import React, { useState } from "react";
// import RegisterForm from "./RegisterForm";
// import LoginForm from "./LoginForm";
// import "../styles/modal.css";

// export default function AuthModal({ close, onSuccess }) {
//   const [mode, setMode] = useState("login");

//   return (
//     <div className="modal-overlay">
//       <div className="modal-box">
//         <button className="close-btn" onClick={close}>×</button>

//         {mode === "login" ? (
//           <LoginForm switchToRegister={() => setMode("register")} onSuccess={onSuccess}/>
//         ) : (
//           <RegisterForm switchToLogin={() => setMode("login")} onSuccess={onSuccess}/>
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import LoginForm from "../pages/LoginModal";
import RegisterForm from "../pages/RegisterModal";

export default function AuthModal({ close, onSuccess }) {
  const [mode, setMode] = useState("login");

  return (
    <div className="modal-overlay position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center">
      <div className="bg-white p-4 rounded shadow" style={{ width: "400px" }}>
        <button className="btn-close float-end" onClick={close}></button>

        {mode === "login" ? (
          <LoginForm switchToRegister={() => setMode("register")} onSuccess={onSuccess} />
        ) : (
          <RegisterForm switchToLogin={() => setMode("login")} onSuccess={onSuccess} />
        )}
      </div>
    </div>
  );
}
