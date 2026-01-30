import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Dashboard from "./Dashboard";
import Login from "./Login";


function App() {

  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setAuth(true);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;
    }
  }, []);

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/login"
          element={<Login setAuth={setAuth} />}
        />

        <Route
          path="/"
          element={
            auth ? <Dashboard /> : <Navigate to="/login" />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
