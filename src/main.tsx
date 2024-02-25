import React,{ createContext, useState }  from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Cart from "./Cart";
import CheckoutPage from "./CheckoutPage";
import "./style.css"

export const DataContext = createContext();
function MainApp(){
  const [menu,setMenu] = useState(null)
  const [selectedMenu, setSelectedMenu] = useState(1);


  return(
    <DataContext.Provider value={{menu,setMenu,selectedMenu,setSelectedMenu}}>
    <BrowserRouter basename="/">
      <Routes>
        
        <Route  path="/cart" element={<Cart/>} /> 
        <Route  path="/checkout" element={<CheckoutPage/>} /> 
        <Route  path="/" element={<App />} /> 


      </Routes>
    </BrowserRouter>
  </DataContext.Provider>
  )
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <MainApp/>
    // <App />
  
);
