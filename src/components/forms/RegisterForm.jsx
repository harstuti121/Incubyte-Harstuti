import React, { useState } from "react";
import GoogleButton from "./GoogleButton";
import { api } from "../services/api";

export default function RegisterForm({ switchToLogin, onSuccess }) {
  const [input, setInput] = useState({ name: "", email: "", password: "" });

  const register = async (e) => {
    e.preventDefault();
    const res = await api.post("/auth/register", input);
    onSuccess(res.token);
  };

  return (
    <>
      <h3 className="modal-title">Create Account</h3>

      <form onSubmit={register}>
        <input className="modal-input" placeholder="Name"
          onChange={(e) => setInput({ ...input, name: e.target.value })} />

        <input className="modal-input" placeholder="Email"
          onChange={(e) => setInput({ ...input, email: e.target.value })} />

        <input className="modal-input" type="password" placeholder="Password"
          onChange={(e) => setInput({ ...input, password: e.target.value })} />

        <button className="modal-btn">Register</button>
      </form>

      <GoogleButton />

      <p className="switch-text">
        Already have an account?{" "}
        <span onClick={switchToLogin}>Login</span>
      </p>
    </>
  );
}
