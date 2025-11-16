import React from "react";

const SweetCard = ({ sweet, onPurchase }) => {
  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <img src={sweet.image} className="card-img-top" alt={sweet.name} />
      <div className="card-body">
        <h5 className="card-title">{sweet.name}</h5>
        <p className="card-text">Category: {sweet.category}</p>
        <p className="card-text">Price: ₹{sweet.price}</p>
        <p className="card-text">Quantity: {sweet.quantity}</p>
        <button
          className="btn btn-success"
          disabled={sweet.quantity === 0}
          onClick={() => onPurchase(sweet.id)}
        >
          {sweet.quantity === 0 ? "Out of Stock" : "Purchase"}
        </button>
      </div>
    </div>
  );
};

export default SweetCard;
