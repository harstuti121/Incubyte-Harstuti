// import React, { useState } from "react";
// import { api } from "../../services/api";


// export default function AddSweetForm({ close, refresh }) {
// const [name, setName] = useState("");
// const [category, setCategory] = useState("");
// const [price, setPrice] = useState(0);
// const [quantity, setQuantity] = useState(1);


// const submit = async () => {
// await api.post("/sweets", { name, category, price, quantity });
// refresh();
// close();
// };


// return (
// <div className="modal-overlay">
// <div className="modal">
// <h2>Add Sweet</h2>
// <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
// <input placeholder="Category" onChange={(e) => setCategory(e.target.value)} />
// <input placeholder="Price" type="number" onChange={(e) => setPrice(e.target.value)} />
// <input placeholder="Quantity" type="number" onChange={(e) => setQuantity(e.target.value)} />
// <button className="btn primary" onClick={submit}>Add</button>
// <button className="btn" onClick={close}>Cancel</button>
// </div>
// </div>
// );
// }

import React, { useState } from "react";
import { api } from "../../services/api";

export default function AddSweetForm({ close, refresh }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [error, setError] = useState("");

  const submit = async () => {
    if (!name || !category || !price || !quantity) {
      setError("All fields are required");
      return;
    }

    try {
      await api.post("/sweets", { name, category, price: Number(price), quantity: Number(quantity) });
      refresh();
      close();
    } catch (err) {
      setError(err.message || "Failed to add sweet");
    }
  };

  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0,
      width: "100%", height: "100%",
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "10px",
        width: "320px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
      }}>
        <h3 className="mb-3">Add New Sweet</h3>
        {error && <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>}
        <input
          className="form-control mb-2"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="form-control mb-2"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          className="form-control mb-2"
          placeholder="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          className="form-control mb-3"
          placeholder="Quantity"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <div className="d-flex justify-content-between">
          <button className="btn btn-primary" onClick={submit}>Add</button>
          <button className="btn btn-secondary" onClick={close}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
