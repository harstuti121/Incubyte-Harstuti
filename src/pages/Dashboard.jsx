// import React, { useEffect, useState } from "react";
// import { api } from "../services/api";

// export default function Dashboard() {
//   const [sweets, setSweets] = useState([]);

//   const load = async () => {
//     const data = await api.get("/sweets");
//     setSweets(data);
//   };

//   useEffect(() => { load(); }, []);

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-4">Available Sweets 🍬</h2>

//       <div className="row">
//         {sweets.map((s) => (
//           <div className="col-md-4 mb-3" key={s._id}>
//             <div className="card shadow-sm">
//               <div className="card-body">
//                 <h5>{s.name}</h5>
//                 <p>₹{s.price}</p>
//                 <p>Qty: {s.quantity}</p>
//                 <button className="btn btn-success"
//                   disabled={s.quantity === 0}>
//                   {s.quantity === 0 ? "Out of stock" : "Buy"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import { api } from "../services/api";

export default function Dashboard() {
  const [sweets, setSweets] = useState([]);
  const [user, setUser] = useState(null);

  const loadSweets = async () => {
    const data = await api.get("/sweets");
    setSweets(data);
  };

  const loadProfile = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const res = await fetch("http://localhost:5000/api/auth/profile", {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      if (res.ok !== false) setUser(data.user);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => { 
    loadSweets(); 
    loadProfile(); 
  }, []);

  return (
    <div className="container mt-4">
      {user && <h2 className="mb-4">Welcome, {user.name}!</h2>}
      <h3 className="mb-4">Available Sweets 🍬</h3>

      <div className="row">
        {sweets.map((s) => (
          <div className="col-md-4 mb-3" key={s._id}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h5>{s.name}</h5>
                <p>₹{s.price}</p>
                <p>Qty: {s.quantity}</p>
                <button className="btn btn-success" disabled={s.quantity === 0}>
                  {s.quantity === 0 ? "Out of stock" : "Buy"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
