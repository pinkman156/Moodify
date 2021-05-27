import React, { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Weather from "./components/Weather";

export default function App() {
  const [token, setToken] = useState("");
  return (
    <div className="App">
      {token === "" ? (
        <Login token={token} setToken={setToken} />
      ) : (
        <Dashboard token={token} />
      )}
    </div>
  );
}
