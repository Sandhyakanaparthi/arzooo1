import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import LandingPage from "./stores/pages/LandingPage";
import Admin from "./stores/components/Admin";
import Kitchen from "./stores/components/Kitchen";
import MobilePage from "./stores/pages/MobilePage";
import CompPage from "./stores/pages/CompPage";
import WatchPage from "./stores/pages/WatchPage";
import FurniturePage from "./stores/pages/FurniturePage";
import AcPage from "./stores/pages/AcPage";
import KitchenPage from "./stores/pages/KitchenPage";
import MobileSingle from "./stores/singles/MobileSingle";
import UserCart from "./stores/UserCart";
import FridgePage from "./stores/pages/FridgePage";
import TvPage from "./stores/pages/TvPage";
import ComputerSingle from "./stores/singles/ComputerSingle";
import FurnitureSingle from "./stores/singles/FurnitureSingle";
import KitchenSingle from "./stores/singles/KitchenSingle";
import AcSingle from "./stores/singles/AcSingle";
import TvSingle from "./stores/singles/TvSingle";
import WatchSingle from "./stores/singles/WatchSingle";
import FridgeSingle from "./stores/singles/FridgeSingle";
import LoginPage from "./stores/components/Login";
import Register from "./stores/components/Register";
import EditPage from "./stores/components/Edit";
import Acbuy from "./stores/buy/Acbuy";
import Anav from "./stores/components/Anav";

const App = () => {


  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edit" element={<EditPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/kitchen" element={<KitchenPage />} />
        <Route path="/mobiles" element={<MobilePage />} />
        <Route path="/computers" element={<CompPage />} />
        <Route path="/watch" element={<WatchPage />} />
        <Route path="/fridge" element={<FridgePage />} />
        <Route path="/tv" element={<TvPage />} />
        <Route path="/furniture" element={<FurniturePage />} />
        <Route path="/ac" element={<AcPage />} />
        <Route path="/mobiles/:id" element={<MobileSingle />} />
        <Route path="/cart" element={<UserCart />} />
        <Route path="/ac/:id" element={<AcSingle />} />
        <Route path="/tv/:id" element={<TvSingle />} />
        <Route path="/computers/:id" element={<ComputerSingle />} />
        <Route path="/furniture/:id" element={<FurnitureSingle />} />
        <Route path="/kitchen/:id" element={<KitchenSingle />} />
        <Route path="/watch/:id" element={<WatchSingle />} />
        <Route path="/fridge/:id" element={<FridgeSingle />} />
        <Route path="/acbuy/:id" element={<Acbuy />} />
        <Route path="/Anav" element={<Anav />} />
      </Routes>
    </div>
  );
};

export default App;
