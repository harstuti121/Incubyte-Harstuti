import React, { useState } from "react";
import SweetCard from "./SweetCard";
import sweetsData from "../data/sweet";

const SweetsGrid = () => {
  const [sweets, setSweets] = useState(sweetsData);

  const handlePurchase = (id) => {
    const updatedSweets = sweets.map(sweet =>
      sweet.id === id ? { ...sweet, quantity: sweet.quantity - 1 } : sweet
    );
    setSweets(updatedSweets);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {sweets.map(sweet => (
          <div key={sweet.id} className="col-md-4">
            <SweetCard sweet={sweet} onPurchase={handlePurchase} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SweetsGrid;
