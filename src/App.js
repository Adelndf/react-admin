import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, List, Login, New, Single } from "./pages";
import { userInputs, productInputs } from "./staticData";
import "./App.scss";
import "./style/dark.scss";
import { useGlobalContext } from "./context";

function App() {
  const { darkMode } = useGlobalContext();

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* users roots */}
          <Route path="/users" element={<List />} />
          <Route path="/users/:userId" element={<Single />} />
          <Route
            path="/users/new"
            element={<New inputs={userInputs} title="Add new user" />}
          />
          {/* products roots */}
          <Route path="/products" element={<List />} />
          <Route path="/products/:productId" element={<Single />} />
          <Route
            path="/products/new"
            element={<New inputs={productInputs} title="Add new product" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
