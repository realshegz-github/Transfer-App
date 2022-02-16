import "./App.css";
// import { useState } from 'react';
import Navbar from "./Component/Nav/Navbar";
import {
  BrowserRouter,
  Routes, // Just Use Routes instead of "Switch"
  Route,
  useNavigate,
} from "react-router-dom";
import {AuthRoute} from './Component/auth/AuthGuard'

import Home from "./Pages";
import Signup from "./Pages/signup";
import Transaction from "./Pages/transaction";
import Transfer from "./Pages/homepage";
import Login from "./Component/Login/Login";
import useToken from "./Component/useToken";
import { useEffect } from "react";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Navbar />
        {/* <Login/> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/transaction" element={<AuthRoute Component={Transaction} />} />
          <Route exact path="/homepage" element={<AuthRoute Component={Transfer} />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
