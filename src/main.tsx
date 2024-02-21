import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Cart from "./Cart";
import CheckoutPage from "./CheckoutPage";
import "./style.css"


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter basename="/">
      <Routes>
        
        <Route  path="/cart" element={<Cart/>} /> 
        <Route  path="/checkout" element={<CheckoutPage/>} /> 
        <Route  path="/" element={<App />} /> 


      </Routes>
    </BrowserRouter>
    // <App />
  
);
